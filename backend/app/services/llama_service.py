from app.core.config import settings
from app.services.translation_service import TranslationService, SA_LANG_CODES
from google import genai
from google.genai import types 
import requests
from typing import Optional

class LlamaClient:

    def __init__(self):
        self.client = None 
        self.client_type = None
        self.api_url = None
        self.model_name = None
        
        self.translator = TranslationService()
        self.lang_codes = SA_LANG_CODES
        
        if settings.LLAMA_API_KEY != "dummy_llama_key":
            self.client_type = "LLAMA"
            self.api_url = settings.LLAMA_API_URL
            self.model_name = settings.LLAMA_CHAT_MODEL
            self.client = requests.Session() 

        elif settings.GEMINI_API_KEY != "dummy_gemini_key":
            self.client_type = "GEMINI"
            self.api_url = None  
            self.model_name = settings.GEMINI_CHAT_MODEL
            self.client = genai.Client()
        
        else:
            raise ValueError(
                "CRITICAL: No valid API key found. Please check your .env file for LLAMA or GEMINI_API_KEY."
            )
            
        print(f"LlamaClient initialized successfully. Using {self.client_type} API.")

    def generate_content(self, system_prompt: str, user_input: str, source_lang: str = 'en', target_lang: str = 'en') -> str:
        
        english_input = self.translator.translate_to_english(user_input, source_lang)
        
        final_response = "I apologize, an unexpected error occurred while processing your request. Please try again."

        english_response = ""
        
        try:
            
            if self.client_type == "GEMINI":
                config = types.GenerateContentConfig(system_instruction=system_prompt)
                
                response = self.client.models.generate_content(
                    model=self.model_name,
                    contents=english_input,  
                    config=config,
                )
                english_response = response.text.strip()
                
            elif self.client_type == "LLAMA":
                headers = {
                    "Authorization": f"Bearer {settings.LLAMA_API_KEY}",
                    "Content-Type": "application/json",
                }
                
                payload = {
                    "model": self.model_name,
                    "messages": [
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": english_input} 
                    ],
                    "temperature": 0.5, 
                    "max_tokens": 1024,
                }
                
                response = self.client.post(self.api_url, headers=headers, json=payload)
                response.raise_for_status() 
                
                english_response = response.json()['choices'][0]['message']['content'].strip()
                
            else:
                return "Internal Error: Client Type not recognized."
                
            final_response = self.translator.translate_from_english(english_response, target_lang)
            
            return final_response

        except requests.exceptions.HTTPError as e:
            print(f"LLAMA API Error (HTTP Status): {e}")
            return "I apologize, the AI connection failed. Please ensure your API key is correct and try again."
        except Exception as e:
            print(f"LLM API Error during processing: {e}")
            return "I apologize, but I am having trouble connecting to my central brain. Please try again later."
    


          

from app.services.llama_service import LlamaClient
client = LlamaClient() 
client.generate_content(settings.SYSTEM_PROMPT, "I have a sore throat")

print(client.client_type)





        

