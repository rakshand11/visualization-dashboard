# Data Visualization Dashboard — Frontend

Interactive data visualization dashboard built with React.js and Recharts for the Blackcoffer assignment.

## Tech Stack

- React.js
- Recharts
- Tailwind CSS
- Axios
- Vite

## Setup

1. Install dependencies
   npm install

2. Create .env file
   VITE_API_URL=http://localhost:5000/api

3. Start frontend
   npm run dev

## Features

- 📊 4 Interactive charts
- 🔍 7 Filter dropdowns
- 📈 Real time stats cards
- 🌐 Connected to REST API
- 📱 Responsive dark theme UI

## Charts

| Chart                | Description                                 |
| -------------------- | ------------------------------------------- |
| Intensity by Sector  | Bar chart showing avg intensity per sector  |
| Likelihood by Region | Bar chart showing avg likelihood per region |
| Topics Distribution  | Pie chart showing topic frequency           |
| Relevance by Country | Bar chart showing avg relevance per country |

## Filters

| Filter    | Description               |
| --------- | ------------------------- |
| End Year  | Filter by end year        |
| Topics    | Filter by topic           |
| Sectors   | Filter by sector          |
| Regions   | Filter by region          |
| Pestles   | Filter by PESTLE category |
| Sources   | Filter by data source     |
| Countries | Filter by country         |

## Environment Variables

| Variable     | Description          |
| ------------ | -------------------- |
| VITE_API_URL | Backend API base URL |

## Project Structure

frontend/
├── src/
│ ├── api/
│ │ └── axios.js
│ ├── components/
│ │ ├── Filter.jsx
│ │ └── charts/
│ │ ├── IntensityBarChart.jsx
│ │ ├── LikelihoodBarChart.jsx
│ │ ├── RelevancePieChart.jsx
│ │ └── TopicChart.jsx
│ ├── pages/
│ │ └── Dashboard.jsx
│ ├── App.jsx
│ └── main.jsx
├── .env
├── .gitignore
└── package.json

## Scripts

| Script          | Description              |
| --------------- | ------------------------ |
| npm run dev     | Start development server |
| npm run build   | Build for production     |
| npm run preview | Preview production build |
