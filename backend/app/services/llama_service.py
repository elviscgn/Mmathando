from app.core.config import settings
from google.genai import Client, types
import requests


class LlamaClient:
    def __init__(self):

        self.client = None
        self.client_type = None
        self.api_url = None

        if settings.LLAMA_API_KEY!="dummy_llama_key":
            self.client_type="LLAMA"
            self.client= requests.Session()
            self.api_url = settings.LLAMA_API_URL
        
        elif settings.GEMINI_API_KEY!="dummy_gemini_key":
             self.client_type="GEMINI"
             self.client= Client()
             self.api_url = None
        
        else:
            raise ValueError("CRITICAL: No valid API key found. Please check your .env file for LLAMA or GEMINI keys.")
        
        print(f"LlamaClient initialized successfully. Using {self.client_type} API.")


    def generate_content(self, system_prompt: str, user_input: str):

        if self.client_type=="GEMINI":

          config = types.GenerateContentConfig(system_instruction=system_prompt)
          response = self.client.models.generate_content(model = settings.GEMINI_CHAT_MODEL,
                                                         contents=user_input,
                                                         config=config)
          
          
          return response.text.strip()
        
        elif self.client_type == "LLAMA":
            headers = {
                "Authorization": f"Bearer {settings.LLAMA_API_KEY}",
                "Content-Type": "application/json",
            }
            
            payload = {
                "model": settings.LLAMA_CHAT_MODEL,
                "messages": [
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": user_input}
                ],
                "temperature": 0.5, 
                "max_tokens": 1024,
                
            }
            
            response = self.client.post(
                self.api_url,
                headers=headers,
                json=payload
            )
            
            if response.status_code != 200:
                print(f"LLAMA API Error: {response.status_code} - {response.text}")
                return "I apologize, the AI service is currently unavailable. Please check your API key."

            response_json = response.json()
            return response_json['choices'][0]['message']['content'].strip()

        return "Initialization Error."

          

from app.services.llama_service import LlamaClient
client = LlamaClient() 
client.generate_content(settings.SYSTEM_PROMPT, "I have a sore throat")

print(client.client_type)





        

