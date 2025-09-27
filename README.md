# BitNBuild-25_gitHappens


 📊 Review Radar

AI-powered platform to analyze customer reviews, extract sentiment & topics, and provide actionable insights through an interactive dashboard.



 🚀 Overview

Review Radar helps businesses track customer feedback at scale. It scrapes reviews from various sources, analyzes them using state-of-the-art NLP models, and visualizes the results in an intuitive UI.

Tech stack includes:

 Backend → Flask (Phase 1–4), moving towards FastAPI
 Frontend → React (with Figma-based UI wireframes)
 AI / NLP → Hugging Face Transformers (Sentiment Analysis, Keyword Extraction)
 Scraping → Python Scrapy/Requests for review collection



 🛠️ Project Phases

 ✅ Phase 1 – Setup & Planning

 [x] Repository created
 [x] Virtual Environment configured
 [x] Framework chosen → Flask
 [x] Frontend planning → React + Figma Wireframes
 [x] Data Flow Outline:
  URL input → Analyze Button → Scraper → JSON → Model Pipeline → UI Results



 🔍 Phase 2 – Data Collection

 [x] Scraper implemented
 [ ] Handle edge cases (pagination, missing data, different formats)
 [ ] Robust data handling (cleaning, validation, storage)



 🤖 Phase 3 – AI Processing

 [ ] Sentiment Analysis (using Hugging Face models, e.g. `siebert/sentiment-roberta-large-english`)
 [ ] Keyword & Topic Extraction
 [ ] Generate structured results (JSON)



 🔧 Phase 4 – Backend API

 [ ] Flask / FastAPI backend
 [ ] Integrate NLP pipeline into API endpoints
 [ ] API testing



 🎨 Phase 5 – Frontend & Visualization

 [ ] UI development in React
 [ ] API integration for live results
 [ ] Visualization (charts, graphs, keyword lists)



 🧪 Phase 6 – Integration & Testing

 [ ] End-to-end integration testing
 [ ] UI polish & performance optimization
 [ ] Buffer time for improvements



 📂 Project Structure


review-radar/
│── backend/         Flask/FastAPI backend
│── frontend/        React frontend
│── models/          Hugging Face models, NLP pipeline
│── scraper/         Web scraper scripts
│── data/            Collected/cleaned datasets
│── README.md        Project documentation




 ⚡ Tech Stack

 Python 3.10+
 Flask / FastAPI (Backend)
 React.js (Frontend)
 Hugging Face Transformers (AI/NLP)
 Matplotlib / Chart.js / D3.js (Visualization)
 Scrapy / Requests / BeautifulSoup (Scraping)



 📌 Roadmap

 Phase 1 → Setup ✅
 Phase 2 → Scraper & Data Handling 🔄
 Phase 3 → Sentiment & Topic Extraction 🔜
 Phase 4 → Backend API
 Phase 5 → Frontend UI + Visuals
 Phase 6 → Integration, Testing & Deployment



 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "Added feature"`)
4. Push branch (`git push origin feature-name`)
5. Create a Pull Request



