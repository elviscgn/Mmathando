🚀 Mmathando Backend Service (MVP)

This document provides minimal instructions required to activate the Mmathando AI Chat Backend.

🏃 Quick Start Guide (How to Run the Server)

Follow these steps in your terminal to start the API:

1. Navigate to Project Root

`cd backend`


2. Activate Environment

You must activate the virtual environment (venv) where the libraries were installed.

# macOS / Linux / Git Bash
`source venv/bin/activate`

# Windows PowerShell
`.\venv\Scripts\Activate.ps1`


3. Configure API Key

The server requires an API key for the AI to function.

Open the .env file in the backend/ directory.

Fill in the value for GEMINI_API_KEY (if testing) or TOGETHER_API_KEY (for final deployment).

4. Run the Server

Execute the command below. The server will automatically reload when you make changes to Python files.

`uvicorn app.main:app --reload`


✅ Verification and Testing

Access URL: Open your browser and go to: http://127.0.0.1:8000/docs

Test Endpoint: Find the POST /chat endpoint, click "Try it out," and execute a sample request (e.g., {"user_input": "I have a sore throat"}).

Success: A successful response will return a structured JSON response with Mmathando's empathetic message and a 200 OK status code.
