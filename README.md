# 🏗️ DevSync | Full-Stack AI Code Review Platform

DevSync is a modern, full-stack application that leverages the power of Google's Gemini AI to provide developers with instant, automated code reviews. It analyzes your code for security vulnerabilities, performance bottlenecks, and best practices, delivering the feedback in a highly readable, beautifully formatted dashboard.

![DevSync Interface](https://res.cloudinary.com/dcsg1cjnt/image/upload/v1774258057/Screenshot_2026-03-23_145433_ebcnlm.png)

## ✨ Features

* **Real-Time Code Editor:** Integrated Monaco Editor provides a VS Code-like experience right in the browser, complete with syntax highlighting and dark mode.
* **AI-Powered Analysis:** Connects to the `@google/genai` SDK to perform deep static code analysis.
* **Beautiful Markdown Reports:** Uses `react-markdown` and Tailwind Typography to render complex AI feedback into structured, readable reports.
* **Containerized Architecture:** Fully dockerized for consistent, reproducible local development.
* **Cloud-Ready:** Engineered as a monorepo optimized for seamless deployment on platforms like Render and Vercel.

## 🛠️ Tech Stack

**Frontend:**
* React + Vite
* Tailwind CSS
* Monaco Editor (`@monaco-editor/react`)

**Backend:**
* Node.js + Express
* Google Gemini API (`@google/genai`)
* CORS & Dotenv

**DevOps & Deployment:**
* Docker & Docker Compose
* Render (Backend Web Service & Frontend Static Site)

## 📂 Project Structure

This project is structured as a monorepo containing both the frontend and backend services:

```text
devsync-project/
├── backend/                # Node.js & Express API
│   ├── server.js           # Main application logic & AI integration
│   ├── package.json
│   └── Dockerfile          # Backend container blueprint
├── frontend/               # React & Vite UI
│   ├── src/
│   │   ├── App.jsx         # Main React component
│   │   └── index.css       # Tailwind directives
│   ├── package.json
│   ├── vite.config.js      
│   └── Dockerfile          # Frontend container blueprint
├── docker-compose.yml      # Master orchestration file
└── README.md
```
## 🚀 Local Development Setup

You can run this project locally using either **Docker (recommended)** or standard **npm commands**.

### Prerequisites
- [Node.js](https://nodejs.org/) **v18+**
- [Docker Desktop](https://www.docker.com/products/docker-desktop) *(optional, but recommended)*
- A free **Google Gemini API Key** (if you plan to integrate Gemini API features)

### Step 1: Environment Variables
Create a .env file inside the backend/ directory and add your Google Gemini API key:

```
GEMINI_API_KEY=your_actual_api_key_here
PORT=3000
```

### Step 2: Running with Docker (Recommended)
From the root directory of the project, run:

```
docker-compose up --build
```

* The frontend will be available at http://localhost:5173
* The backend will run on http://localhost:3000

### Step 2 (Alternative): Running Manually
If you prefer not to use Docker, open two separate terminal windows:

#### Terminal 1 (Backend):
```
cd backend
npm install
npm start
```

#### Terminal 2 (Frontend):
```
cd frontend
npm install
npm run dev
```
## ☁️ Deployment
This project is configured for easy deployment on cloud platforms.

* Backend: Deploy the backend/ folder as a Web Service on Render. Ensure you set the GEMINI_API_KEY environment variable in the cloud dashboard.
* Frontend: Deploy the frontend/ folder as a Static Site on Render or Vercel. Set the build command to npm install && npm run build and the publish directory to dist. Add a VITE_API_URL environment variable pointing to your live backend URL.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
