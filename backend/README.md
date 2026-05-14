# Data Visualization Dashboard — Backend

REST API built with Node.js, Express and MongoDB for the Blackcoffer data visualization assignment.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv

## Setup

1. Install dependencies
   npm install

2. Create .env file
   PORT=5000
   MONGO_URI=your_mongodb_connection_string

3. Seed database with JSON data
   npm run seed

4. Start server
   npm run dev

## API Endpoints

| Method | Route             | Description                        |
| ------ | ----------------- | ---------------------------------- |
| GET    | /api/data         | Get all data with optional filters |
| GET    | /api/data/filters | Get all unique filter values       |

## Filter Query Parameters

GET /api/data?sector=Energy
GET /api/data?region=Northern America
GET /api/data?topic=gas&sector=Energy
GET /api/data?country=India&pestle=Industries

## Environment Variables

| Variable  | Description                |
| --------- | -------------------------- |
| PORT      | Server port (default 5000) |
| MONGO_URI | MongoDB connection string  |

## Project Structure

backend/
├── src/
│ ├── controllers/
│ │ └── data.controller.js
│ ├── model/
│ │ └── data.model.js
│ ├── route/
│ │ └── data.route.js
│ ├── seed/
│ │ └── seed.js
│ └── index.js
├── .env
├── .gitignore
└── package.json

## Scripts

| Script       | Description                 |
| ------------ | --------------------------- |
| npm run dev  | Start with nodemon          |
| npm start    | Start server                |
| npm run seed | Import JSON data to MongoDB |
