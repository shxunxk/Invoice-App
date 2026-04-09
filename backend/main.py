import os

import requests
from dotenv import load_dotenv
from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

MINDEE_URL = "https://api.mindee.net/v1/products/mindee/invoices/v4/predict"

app = FastAPI(title="Invoice Backend", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_ORIGIN", "*")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"ok": True, "mindee_key_configured": bool(os.getenv("MINDEE_API_KEY"))}


@app.post("/api/invoice")
async def invoice(file: UploadFile = File(...)):
    mindee_api_key = os.getenv("MINDEE_API_KEY")
    if not mindee_api_key:
        raise HTTPException(status_code=500, detail="Missing MINDEE_API_KEY on server")

    if not file:
        raise HTTPException(status_code=400, detail="No file provided")

    content = await file.read()
    if not content:
        raise HTTPException(status_code=400, detail="Empty file")

    try:
        resp = requests.post(
            MINDEE_URL,
            headers={"Authorization": f"Token {mindee_api_key}"},
            files={
                "document": (
                    file.filename or "invoice.jpg",
                    content,
                    file.content_type or "application/octet-stream",
                )
            },
            timeout=90,
        )
    except requests.RequestException as e:
        raise HTTPException(status_code=502, detail=f"Upstream request failed: {e}") from e

    if not resp.ok:
        raise HTTPException(status_code=resp.status_code, detail=resp.text)

    return resp.json()
