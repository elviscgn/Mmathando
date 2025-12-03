from fastapi import APIRouter, HTTPException,File,UploadFile,Form
from app.services.pdf_service import extract_text_from_pdf
from app.schemas.request_models import ChatRequest, ChatResponse
from app.services.llama_service import LlamaClient
from app.core.config import settings

router = APIRouter()

try:
    ai_client = LlamaClient()

except Exception as e:
    print(f"Error initializing AI Client: {e}")
    ai_client = None

MMATHANDO_PROMPT = settings.SYSTEM_PROMPT

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