@echo off

:: Start backend
echo Starting backend...
cd backend
start cmd /k "npm run serve"

:: Wait for 3 seconds
timeout /t 3 /nobreak

:: Start frontend
echo Starting frontend...
cd ..
cd frontend
start cmd /k "npm run start" 