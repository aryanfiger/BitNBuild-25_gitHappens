# utils.py
from bs4 import BeautifulSoup
import requests
import json
from sklearn.feature_extraction.text import TfidfVectorizer

def scrape_reviews_from_page(url, max_reviews=80):
    headers = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36"}
    try:
        r = requests.get(url, headers=headers, timeout=10)
        html = r.text
    except Exception:
        return []
    soup = BeautifulSoup(html, "lxml")
    reviews = []
    for node in soup.select('[data-hook="review-body"]'):
        text = node.get_text(separator=" ", strip=True)
        if len(text) > 20: reviews.append(text)
    if not reviews:
        for node in soup.select(".review-text, .review-text-content, .a-size-base.review-text"):
            text = node.get_text(separator=" ", strip=True)
            if len(text) > 20: reviews.append(text)
    if not reviews:
        paragraphs = soup.find_all(['p','div','span'])
        for p in paragraphs:
            text = p.get_text(separator=" ", strip=True)
            if len(text) >= 80 and len(reviews) < max_reviews:
                reviews.append(text)
    return reviews[:max_reviews]

def load_sample_reviews(path="sample_reviews.json"):
    try:
        with open(path, "r", encoding="utf8") as f:
            data = json.load(f)
            if isinstance(data, list): return data
    except:
        pass
    return [
      "Great battery life, lasts all day.",
      "Stopped working after two weeks, very disappointed.",
      "Excellent build quality and value for money.",
      "Customer service was unhelpful and slow to respond."
    ]

def top_keywords(texts, top_n=6):
    if not texts: return []
    vectorizer = TfidfVectorizer(stop_words="english", max_features=200)
    X = vectorizer.fit_transform(texts)
    sums = X.sum(axis=0).A1
    terms = vectorizer.get_feature_names_out()
    top_idx = sums.argsort()[::-1][:top_n]
    return [terms[i] for i in top_idx if terms[i].isalpha() or len(terms[i])>1]
