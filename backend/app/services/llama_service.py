from app.core.config import settings
from google.genai import Client
import requests

class LlamaClient:
    def __init__(self):

        self.client = None
        self.client_type = None

        if settings.LLAMA_API_KEY!="dummy_llama_key":
            self.client_type="LLAMA"
            self.client= requests.Session()
        
        elif settings.GEMINI_API_KEY!="dummy_gemini_key":
             self.client_type="GEMINI"
             self.client= Client()
        
        else:
            raise ValueError("CRITICAL: No valid API key found. Please check your .env file for LLAMA or GEMINI keys.")
        
        print(f"LlamaClient initialized successfully. Using {self.client_type} API.")



from app.services.llama_service import LlamaClient
client = LlamaClient() 
print(client.client_type)
# Expected output should be 'GEMINI' (or 'LLAMA' if you filled that key in)



        

