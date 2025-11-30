# backend/app/core/config.py

import os
from dotenv import load_dotenv

# This line loads the environment variables from your .env file
load_dotenv() 

class Settings:
    """
    Configuration class for loading environment variables securely.
    """
    # Llama Settings (Future/Primary Use)
    LLAMA_API_KEY: str = os.getenv("TOGETHER_API_KEY", "dummy_llama_key")
    LLAMA_CHAT_MODEL: str = os.getenv("LLAMA_CHAT_MODEL", "meta-llama/Llama-3.2-11B-Instruct-Turbo")
    LLAMA_API_URL: str = os.getenv("LLAMA_API_URL", "https://api.together.xyz/v1/chat/completions")

    # --- Gemini Testing Settings ---
    # The client will look for this key automatically
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "dummy_gemini_key")
    GEMINI_CHAT_MODEL: str = os.getenv("GEMINI_CHAT_MODEL", "gemini-2.5-flash") 

    # Audio & PDF Settings (Future use)
    AUDIO_LANGUAGE: str = os.getenv("AUDIO_LANGUAGE", "en-US")

# CRUCIAL LINE: This creates the variable 'settings' that your test script is trying to import.
settings = Settings()