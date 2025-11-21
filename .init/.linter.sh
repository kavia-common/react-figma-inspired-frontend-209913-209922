#!/bin/bash
cd /home/kavia/workspace/code-generation/react-figma-inspired-frontend-209913-209922/react_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

