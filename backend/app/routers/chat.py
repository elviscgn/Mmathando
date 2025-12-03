from fastapi import APIRouter, HTTPException,File,UploadFile,Form
from app.services.pdf_service import extract_text_from_pdf
from app.schemas.request_models import ChatRequest, ChatResponse
from app.services.llama_service import LlamaClient
from app.core.config import settings
from app.services.memory_service import MemoryService

router = APIRouter()

try:
    ai_client = LlamaClient()



except Exception as e:
    print(f"Error initializing AI Client: {e}")
    ai_client = None

try:
    memory_service =  MemoryService()
except Exception as e:
    print(f"Error initializing Memory service database: {e}")

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
        session_id = request.session_id

        chat_history =[]

        if memory_service:
            chat_history=memory_service.get_recent_messages(session_id)
        
        history_context = ''
        for message in chat_history:
            if message['role']=='user':
                history_context+=f"USER: {message['content']}\n"
            else:
                history_context+=f"ASSISSTANT: {message['content']}\n"
        
        full_user_input = f"PREVIOUS CONVERSATION:\n{history_context}\n\nUSER'S NEW MESSAGE:\n{user_text}"

        ai_response_text = ai_client.generate_content(
            system_prompt=MMATHANDO_PROMPT,
            user_input=full_user_input,
            source_lang=selected_language,
            target_lang=selected_language
        )

        if memory_service:
            memory_service.add_message(session_id, "user", user_text)
            memory_service.add_message(session_id, "assistant", ai_response_text)



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
    language: str = Form("english"),
    session_id: str = Form("default_pdf_session") 
):
    """
    Receives PDF, reads it, loads history, calls AI, and saves the interaction.
    """
    if not ai_client:
        raise HTTPException(status_code=500, detail="AI Service is not initialized.")

    try:
        
        file_bytes = await file.read()
        pdf_text = extract_text_from_pdf(file_bytes)
        
        
        chat_history = []
        if memory_service:
            chat_history = memory_service.get_recent_messages(session_id)
        
       
        history_context = ""
        for msg in chat_history:
            role_label = "USER" if msg['role'] == "user" else "ASSISTANT"
            history_context += f"{role_label}: {msg['content']}\n"

       
        user_input_for_ai = (
            f"PREVIOUS CONVERSATION:\n{history_context}\n\n"
            f"USER INSTRUCTION: {user_prompt}\n"
            f"--- DOCUMENT TEXT ---\n{pdf_text}"
        )

        
        ai_response_text = ai_client.generate_content(
            system_prompt=MMATHANDO_PROMPT,
            user_input=user_input_for_ai,
            source_lang=language, 
            target_lang=language
        )

        
        if memory_service:
            
            memory_service.add_message(session_id, "user", f"[Uploaded PDF] {user_prompt}")
            memory_service.add_message(session_id, "assistant", ai_response_text)

        return ChatResponse(
            response_text=ai_response_text
        )

    except Exception as e:
        print(f"Error processing PDF upload: {e}")
        raise HTTPException(
            status_code=500, 
            detail=f"Failed to process document: Ensure the file is a readable PDF. Details: {e}"
        )