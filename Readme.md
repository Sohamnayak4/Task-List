# Note Taking Application

This is a simple note-taking application built with the MERN (MongoDB, Express, React, Node.js) stack.

## Features

- Allows users to create, read, update, and delete notes.
- Frontend built with React.
- Backend built with Node.js and Express.
- Data storage handled by MongoDB.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB Atlas account or a local MongoDB server running.

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Sohamnayak4/Task-List.git
   ```
2. Navigate to the project directory
   ```sh
   cd note-taking-app
   ```

### Backend Setup

1. Navigate to the backend directory
   ```sh
   cd backend
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Create a `.env` file in the backend directory and set your MongoDB URI
   ```plaintext
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server
   ```sh
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory
   ```sh
   cd ../frontend
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Create a `.env` file in the frontend directory and set your API URL
   ```plaintext
   VITE_API_URL=http://localhost:5000/api/notes
   ```
4. Start the development server
   ```sh
   npm run dev
   ```

## Usage

- Visit `http://localhost:3000` in your browser to use the application.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Project Link: [https://github.com/Sohamnayak4/Task-List.git](https://github.com/Sohamnayak4/Task-List.git)
