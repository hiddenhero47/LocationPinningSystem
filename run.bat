@echo off
echo Starting backend...
start cmd /k "cd backend && npm run dev"

timeout /t 3 /nobreak

echo Starting frontend...
start cmd /k "cd frontend && npm run dev" 