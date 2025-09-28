# 📊 Review Radar

> **AI-powered platform to analyze customer reviews, extract sentiment & topics, and provide actionable insights through an interactive dashboard.**

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Flask](https://img.shields.io/badge/Flask-3.0.0-green.svg)](https://flask.palletsprojects.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC.svg)](https://tailwindcss.com/)

## 🚀 Overview

Review Radar is a comprehensive solution that helps businesses track and analyze customer feedback at scale. It scrapes reviews from various e-commerce platforms, analyzes them using state-of-the-art NLP models, and visualizes the results in an intuitive, modern web interface.

### ✨ Key Features

- **🔍 Smart Review Scraping**: Automatically extracts reviews from major e-commerce platforms
- **🤖 AI-Powered Analysis**: Advanced sentiment analysis and keyword extraction using Hugging Face transformers
- **📊 Interactive Visualizations**: Beautiful charts and graphs powered by Recharts
- **🌙 Dark/Light Mode**: Seamless theme switching for better user experience
- **🔌 Browser Extension**: One-click analysis directly from product pages
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **⚡ Real-time Processing**: Fast analysis with loading states and progress indicators

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Beautiful, accessible UI components
- **Recharts** - Composable charting library
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and caching

### Backend
- **Flask 3.0.0** - Lightweight Python web framework
- **Hugging Face Transformers** - State-of-the-art NLP models
- **BeautifulSoup4** - Web scraping and HTML parsing
- **Requests** - HTTP library for API calls
- **CORS** - Cross-origin resource sharing

### Browser Extension
- **Chrome Extension API** - Browser integration
- **Manifest V3** - Modern extension architecture

## 📁 Project Structure

```
review-radar2/
├── 📁 src/                          # React frontend source
│   ├── 📁 components/               # Reusable UI components
│   │   ├── 📁 charts/              # Data visualization components
│   │   │   ├── KeywordBar.tsx      # Horizontal bar chart for keywords
│   │   │   └── SentimentDonut.tsx  # Donut chart for sentiment analysis
│   │   ├── 📁 layout/              # Layout components
│   │   │   ├── Footer.tsx          # Site footer
│   │   │   └── Header.tsx          # Site header with navigation
│   │   ├── 📁 theme/               # Theme management
│   │   │   └── ThemeToggle.tsx     # Dark/light mode toggle
│   │   └── 📁 ui/                  # Base UI components (shadcn/ui)
│   ├── 📁 hooks/                   # Custom React hooks
│   │   ├── useTheme.tsx            # Theme management hook
│   │   └── use-mobile.tsx          # Mobile detection hook
│   ├── 📁 lib/                     # Utility functions and data
│   │   ├── api.ts                  # API client functions
│   │   ├── demoData.ts             # Sample data for development
│   │   └── utils.ts                # Helper utilities
│   ├── 📁 pages/                   # Application pages
│   │   ├── Index.tsx               # Main dashboard page
│   │   ├── Extension.tsx           # Browser extension info page
│   │   └── NotFound.tsx            # 404 error page
│   ├── App.tsx                     # Main application component
│   ├── main.tsx                    # Application entry point
│   └── global.css                  # Global styles and CSS variables
├── 📁 extension/                   # Browser extension
│   ├── manifest.json               # Extension configuration
│   ├── popup.html                  # Extension popup UI
│   ├── popup.js                    # Extension logic
│   └── icon.png                    # Extension icon
├── 📄 api_server.py                # Flask backend server
├── 📄 requirements_api.txt         # Python dependencies
├── 📄 package.json                 # Node.js dependencies
├── 📄 vite.config.ts               # Vite configuration
├── 📄 tailwind.config.ts           # Tailwind CSS configuration
├── 📄 tsconfig.json                # TypeScript configuration
└── 📄 README.md                    # This file
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and npm
- **Python** 3.10+
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/aryanfiger/BitNBuild-25_gitHappens.git
cd BitNBuild-25_gitHappens
```

### 2. Backend Setup

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install Python dependencies
pip install -r requirements_api.txt

# Start the Flask server
python api_server.py
```

The backend will be available at `http://localhost:8501`

### 3. Frontend Setup

```bash
# Install Node.js dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be available at `http://localhost:3000`

### 4. Browser Extension Setup

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked" and select the `extension/` folder
4. The Review Radar extension will appear in your extensions list

## 🎯 Usage

### Web Application

1. **Open the app**: Navigate to `http://localhost:3000`
2. **Enter a product URL**: Paste any e-commerce product URL (Flipkart, Amazon, etc.)
3. **Click Analyze**: The app will scrape reviews and analyze them
4. **View insights**: Explore sentiment analysis, keyword extraction, and visualizations
5. **Toggle themes**: Switch between light and dark modes using the theme toggle

### Browser Extension

1. **Navigate to any product page** on supported e-commerce sites
2. **Click the Review Radar extension** in your browser toolbar
3. **Click "Analyze Reviews"** in the popup
4. **The analysis will open** in a new tab with results

## 📊 Features in Detail

### Sentiment Analysis
- **Overall Sentiment**: Visual donut chart showing positive, negative, and neutral review distribution
- **Percentage Breakdown**: Clear percentage indicators for each sentiment category
- **Review Counts**: Total number of reviews analyzed

### Keyword Extraction
- **Top Keywords**: Most frequently mentioned terms in reviews
- **Positive Keywords**: Terms associated with positive sentiment
- **Negative Keywords**: Terms associated with negative sentiment
- **Interactive Charts**: Hover for detailed information

### User Experience
- **Responsive Design**: Works on all device sizes
- **Loading States**: Clear feedback during analysis
- **Error Handling**: Graceful error messages and fallbacks
- **Theme Support**: Light and dark mode options

## 🔧 Development

### Available Scripts

```bash
# Frontend development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run typecheck    # Run TypeScript type checking

# Backend development
python api_server.py # Start Flask development server
```

### Code Structure

- **Components**: Reusable UI components in `src/components/`
- **Pages**: Main application pages in `src/pages/`
- **Hooks**: Custom React hooks in `src/hooks/`
- **Utils**: Helper functions in `src/lib/`
- **API**: Backend API endpoints in `api_server.py`

### Styling

The project uses Tailwind CSS with a custom design system:
- **Colors**: Defined in `src/global.css` with CSS variables
- **Components**: Built with shadcn/ui for consistency
- **Themes**: Light and dark mode support
- **Responsive**: Mobile-first design approach

## 🚀 Deployment

### Frontend (Netlify/Vercel)

```bash
# Build the project
npm run build

# Deploy the dist/ folder to your hosting service
```

### Backend (Heroku/Railway)

```bash
# Install production dependencies
pip install -r requirements_api.txt

# Deploy with your preferred platform
```

### Environment Variables

Create a `.env` file for production:

```env
FLASK_ENV=production
CORS_ORIGINS=https://yourdomain.com
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed
- Follow the existing code style

## 📝 API Documentation

### Endpoints

#### `GET /analyze?url={product_url}`

Analyzes reviews from a product URL.

**Parameters:**
- `url` (string): The product URL to analyze

**Response:**
```json
{
  "sentiment": {
    "positive": 45,
    "negative": 20,
    "neutral": 35
  },
  "keywords": {
    "positive": ["great", "excellent", "amazing"],
    "negative": ["terrible", "awful", "disappointed"]
  },
  "total_reviews": 100
}
```

## 🐛 Troubleshooting

### Common Issues

**Frontend not loading:**
- Ensure Node.js 18+ is installed
- Run `npm install` to install dependencies
- Check that port 3000 is available

**Backend not responding:**
- Ensure Python 3.10+ is installed
- Activate the virtual environment
- Install requirements: `pip install -r requirements_api.txt`
- Check that port 8501 is available

**Extension not working:**
- Ensure the extension is loaded in Chrome
- Check that the frontend is running on localhost:3000
- Verify the extension manifest is valid

**Analysis fails:**
- Check that the product URL is valid
- Ensure the backend is running
- Check browser console for error messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Aryan Figer** - [@aryanfiger](https://github.com/aryanfiger)
- **Macclive** - [@macclive21](https://github.com/macclive21)

## 🙏 Acknowledgments

- [Hugging Face](https://huggingface.co/) for providing excellent NLP models
- [Shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Recharts](https://recharts.org/) for powerful charting capabilities
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing [Issues](https://github.com/aryanfiger/BitNBuild-25_gitHappens/issues)
3. Create a new issue with detailed information

---

**Made with ❤️ for the BitNBuild 25 hackathon**