#!/bin/bash

# Start backend in the background
echo "Starting backend..."
cd backend && npm run serve &

# Wait a few seconds to let backend initialize
sleep 3

# Start frontend in the background
echo "Starting frontend..."
cd .. &
cd frontend && npm run start &

# Wait for both processes to finish
wait 