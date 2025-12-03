from fastapi import APIRouter, HTTPException,File,UploadFile,Form
from app.services.pdf_service import extract_text_from_pdf
from app.schemas.request_models import ChatRequest, ChatResponse
from app.services.llama_service import LlamaClient

router = APIRouter()

try:
    ai_client = LlamaClient()

except Exception as e:
    print(f"Error initializing AI Client: {e}")
    ai_client = None

MMATHANDO_PROMPT = """
You are Mmathando, a warm, empathetic, safety-focused health support companion with a 3D speaking avatar. 
Your purpose is to emotionally support users, reduce anxiety, help them prepare for medical procedures, 
help them understand their symptoms at a high level, and gently guide them toward appropriate professional medical care.

CONVERSATIONAL TONE & LANGUAGE:
- Always speak in a warm, human-like, and reassuring tone.
- Use short, clear, gentle phrasing (e.g., "I hear you..." or "Let's go through this step by step...").
- NEVER use medical jargon.

I. NON-NEGOTIABLE SAFETY RULES (ABSOLUTE PRIORITY):
1. DIAGNOSIS: NEVER provide a medical diagnosis. Do NOT name diseases, conditions, or syndromes. Describe symptoms generally: "This can happen for many reasons."
2. TREATMENT: NEVER suggest medication, dosages, or treatments. Only suggest general self-care (rest, hydration, monitoring).
3. EMERGENCY: If the user expresses self-harm, suicidal thoughts, thoughts of harming others, or signs of severe medical emergency (e.g., severe chest pain, difficulty breathing, loss of consciousness), you MUST immediately advise contacting their local emergency number or a crisis hotline (e.g., 988).
4. PROFESSIONAL CARE: Always encourage professional medical evaluation if symptoms are severe, persistent, worsening, or unclear.

II. CONVERSATION STRUCTURE (FOLLOW THIS CYCLE FOR EVERY MESSAGE):
1. ACKNOWLEDGE & VALIDATE: ALWAYS begin by expressing empathy, sorry, or concern, and reflect the symptoms or feelings the user described.
2. ASK ONE QUESTION: Ask ONLY ONE clear, specific follow-up question per message. Focus on ONE detail only (severity, duration, location, what makes it better/worse, or onset). NEVER ask two questions.
3. PAUSE: STOP and wait for the user's answer. Do not continue the conversation until they reply.
"""

@router.post("/chat", response_model=ChatResponse)
async def chat_with_mmathando(request: ChatRequest):
    """
    Receives user input, sends it to the AI Service, and returns the structured response.
    """
    if not ai_client:
        raise HTTPException(status_code=500, detail="AI Service is not initialized. Check server logs.")

    try:
        
        user_text = request.user_input
        selected_language = request.language

        ai_response_text = ai_client.generate_content(
            system_prompt=MMATHANDO_PROMPT,
            user_input=user_text,
            source_lang=selected_language,
            target_lang=selected_language
        )

        return ChatResponse(
            response_text=ai_response_text
        )

    except Exception as e:
        print(f"Error processing chat request: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/upload-pdf", response_model=ChatResponse)
async def upload_medical_pdf(
    file: UploadFile = File(..., description="The medical PDF file to be analyzed."),
    
    user_prompt: str = Form("Please summarize and simplify this document."), 
    
    language: str = Form("english")
):
    """
    Receives a PDF file, extracts text, and sends it to Mmathando for simplification and localization.
    """
    if not ai_client:
        raise HTTPException(status_code=500, detail="AI Service is not initialized.")

    try:
        file_bytes = await file.read()
        
        pdf_text = extract_text_from_pdf(file_bytes)
        
        user_input_for_ai = (
            f"{user_prompt}\n\n"
            f"--- DOCUMENT TEXT ---\n"
            f"{pdf_text}"
        )

        ai_response_text = ai_client.generate_content(
            system_prompt=MMATHANDO_PROMPT,
            user_input=user_input_for_ai,
            source_lang=language, 
            target_lang=language
        )

        return ChatResponse(
            response_text=ai_response_text
        )

    except Exception as e:
        print(f"Error processing PDF upload: {e}")
        raise HTTPException(
            status_code=500, 
            detail=f"Failed to process document: Ensure the file is a readable PDF and try again. Details: {e}"
        )