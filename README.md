# Math Bot Application

This repository contains the source code for a simple Math Bot application developed using React for the frontend and Node.js with Express for the backend. The application simulates a basic chatbot interaction for performing arithmetic operations, with interactions stored in a MongoDB database.

##image of an mathbot
![mathbot Image](https://ibb.co/JdHFwQz)
## Features

- User-friendly chat interface for inputting arithmetic operations.
- Basic arithmetic operations supported: addition,subtraction,multiplication,division and exponent
- Backend API endpoint for processing operations and returning results.
- MongoDB integration for storing operation history.

## Setup Instructions

To run the application locally, follow these steps:

### Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/suleman15/Math-Bot.git
   ```

2. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm run dev
   ```

5. Access the frontend of an  application at `http://localhost:5173` in your web browser.

### Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Setup .env file : 

   ```bash
   CONNECTION_STRING = YOUR ATLAS MONGO CONNECTION STRING
  PORT= PORT OF AN IP
   ```

4. Start the server:

   ```bash
   pnpm run dev
   ```

5. Access the backend/api of an application at `http://localhost:${PORT OF AN IP}` 

## Usage

- Input arithmetic operations (e.g., "3+2", "3-4","65(5/3)") in the chat interface.
- Press Enter or submit the operation to receive the result from the Math Bot.

## Folder Structure

The repository follows the following folder structure:

```
math-bot/
├── frontend/              # Frontend source code
│   ├── public/            # Public assets
│   └── src/                 # React components and styles
├── backend/             # Backend source code
│   ├── controllers/   # API route handlers
│   ├── models/        # MongoDB models
│   ├── routes/          # Express route definitions
│   ├── connection/ # Atlas mongo connection
│   └── index.js         # Express application 
├── rest/                    # contain *.rest file 
configuration
└── README.md      # Repository README file
```

## Dependencies

### Frontend
- React
- Axios
- Moment
- React-icons

### Backend
- Node.js
- Express
- MongoDB
- Nodemon
- CORS
- BodyParser
