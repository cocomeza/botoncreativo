#!/usr/bin/env node

import { spawn } from 'child_process';

// Set environment to development
process.env.NODE_ENV = 'development';

// Start the server using node instead of tsx
const child = spawn('node', ['server/index.js'], {
  stdio: 'inherit',
  env: process.env
});

child.on('error', (error) => {
  console.error('Error starting server:', error);
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(code);
});