# Viralytics 
## Social Media Analytics Platform

Viralytics is a cutting-edge platform designed to analyze social media engagement data in real time. By leveraging LangFlow, Google Generative AI, and DataStax Astra DB, Viralytics provides insightful analytics, data visualizations, and AI-powered engagement insights.
![image](https://github.com/user-attachments/assets/144eabb4-4b8a-4a2c-b982-2ea7332ccfe2)
![image](https://github.com/user-attachments/assets/18a52f60-c8a1-4db3-b5c8-c3795f57b99d)

---

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Deployment](#deployment)
4. [System Architecture](#system-architecture)


---

## Features

- **Real-Time Analytics:** Gain instant insights into post performance and engagement metrics.
- **AI-Powered Insights:** Generate GPT-based explanations and recommendations.
- **Data Visualization:** Interactive charts for post performance and engagement trends.
- **AI Chatbot:** AI-driven chatbot for instant analysis and feedback.
- **Mobile-Friendly:** Responsive design for seamless access on any device.

---

## Tech Stack

**Frontend:**
- React.js 
- TailwindCSS for styling
- Chart.js for data visualization

**Backend:**
- Node.js with Express
- WebSocket for real-time communication
- Google Gemini 1.5 Pro for AI insights

**Database:**
- DataStax Astra DB with vector support
- Astra Vectorize for embedding storage and retrieval

**AI Integration:**
- LangFlow for workflow orchestration
- Gemini 1.5 Pro for text processing and analytics insights
- BAAI/bge-large-en-v1.5 embedding model for vector embeddings 

---

## Deployment

### Live Application
- **URL:** [Viralytics Production](https://viralytics-frontend.vercel.app/)

### Infrastructure
- **Frontend Hosting:** Vercel
- **Backend Hosting:** Render
- **Database:** DataStax Astra DB
- **AI Workflow:** LangFlow + Google Gemini Integration

---

## System Architecture

1. **Frontend Layer:**
   - **Landing Page:** Introduces platform features with CTAs.
   - **Analytics Dashboard:** Displays post metrics, charts, and AI insights.
   - **Search and Filter Capabilities:** Allows users to narrow down data views.

2. **Backend Layer:**
   - Proxy server handles API requests and forwards them to LangFlow.
   - WebSocket streaming for real-time updates.
   - Error handling for seamless operation.

3. **LangFlow Pipeline:**
   - Processes CSV input files for mock data.
   - Uses bge-large-en-v1.5 model for converting data into vector embedings 
   - Uses Google Gemini 1.5 Pro for GPT-based insights.
   - Astra Vectorize for embedding generation.

---




