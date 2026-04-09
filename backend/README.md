## FastAPI backend (Mindee proxy)

This backend keeps your Mindee API key on the server and exposes a single endpoint the React app can call.

### Setup

```bash
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
```

### Configure env

Set the Mindee key in your shell (recommended) or copy `.env.example`.

PowerShell:

```powershell
$env:MINDEE_API_KEY="YOUR_KEY"
```

### Run

```bash
uvicorn main:app --reload --port 8000
```

Health check:

`http://localhost:8000/health`
