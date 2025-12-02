<p align="center">
  <img src="public/logo.png" height="200px" alt="mmathando">
</p>

Mmathando is a lightweight health assistant with a 3D avatar, text + voice responses, and quick daily check-ins. Built with React + JavaScript and FastAPI (Python), it uses Llama for reasoning and guidance.

---

## The problem

People often struggle to know if symptoms are serious, when to visit a clinic or hospital, or how to track sleep, mood, and hydration. Medical anxiety and unclear access to care make it harder.

Mmathando provides:

- Symptom-based guidance (non-diagnostic)
- Daily wellness tracking
- Calm explanations for procedures and recovery
- Nearby clinic/hospital locations
- Hotline support for urgent concerns

It doesn’t replace doctors but helps users make informed, actionable decisions quickly and safely.

---

## Features

- **3D Avatar**  
  Three.js-based character for visual interaction.

- **Chat + Voice**  
  Text and optional TTS replies.

- **Daily Check-ins**  
  Log sleep, hydration, mood, symptoms, and basic activity.

- **Health Guidance**  
  Clear suggestions for symptom notes, medication reminders, and recovery steps.

- **Stats Panel**  
  Simple overview of key daily metrics.

---

## Tech Stack

- **Frontend:** React + TypeScript  
- **Backend:** FastAPI  
- **LLM:** Llama  

---

## Team

- Nothando Ndlovu **(nothando-debug)** – [Github](https://github.com/nothando-debug) 
- Elvis Chege **(elviscgn)** – [Github](https://github.com/elviscgn) 
- Mmabatho **(Mmabatho-21)** – [Github](https://github.com/Mmabatho-21 )
- Mphele Moswane **(Mphele)** – [Github](https://github.com/Mphele)

---

## Getting Started

### Prerequisites
- Node.js  
- Python 3.10+  
- FastAPI  
- Llama API access  

---

## Frontend Setup

```bash
cd frontend
npm install
npm start
```

## Backend Setup
```
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```


## Acknowledgements

- **Meta Llama** – powering the AI reasoning engine and partnering with WeThinkCOde.
- **WeThinkCode_** – for the opportunity to study tuition free and linking us with hackathons like this.



<img src="public/wethinkcode.png" alt="WeThinkCode_" width="120"/>

<img src="public/meta.png" alt="Meta" width="120"/>

