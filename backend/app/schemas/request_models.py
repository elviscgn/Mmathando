from pydantic import BaseModel
from typing import Optional

class ChatRequest(BaseModel):
    user_input: str
    language:str = 'english'
    session_id:str = "test_session_id_1"

class ChatResponse(BaseModel):
    response_text: str
    audio_url: Optional[str] = None 
    status: str = "success"
