from pydantic import BaseModel
from typing import Optional

class ChatRequest(BaseModel):
    user_input: str

class ChatResponse(BaseModel):
    response_text: str
    audio_url: Optional[str] = None 
    status: str = "success"