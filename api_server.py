from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline
from utils import scrape_reviews_from_page, load_sample_reviews, top_keywords
import json

app = Flask(__name__)
CORS(app)

# Load the sentiment analysis model
@staticmethod
def load_model():
    return pipeline(
        "sentiment-analysis",
        model="distilbert-base-uncased-finetuned-sst-2-english"
    )

model = load_model()

@app.route('/analyze', methods=['GET'])
def analyze_reviews():
    url = request.args.get('url')
    if not url:
        return jsonify({'error': 'URL parameter is required'}), 400
    
    try:
        # Scrape reviews from the URL
        reviews = scrape_reviews_from_page(url)
        if not reviews:
            reviews = load_sample_reviews()
            using_sample = True
        else:
            using_sample = False

        # Run sentiment analysis
        results = [model(r, truncation=True, max_length=512)[0] for r in reviews]
        scores = [r['score'] for r in results]
        labels = [r['label'] for r in results]

        # Map DistilBERT labels to POSITIVE / NEGATIVE / NEUTRAL
        norm_labels = []
        for l, s in zip(labels, scores):
            if l.upper() == "POSITIVE" and s < 0.6:  # low confidence → neutral
                norm_labels.append("NEUTRAL")
            else:
                norm_labels.append(l.upper())

        total = len(norm_labels)
        pos_count = norm_labels.count("POSITIVE")
        neg_count = norm_labels.count("NEGATIVE")
        neut_count = norm_labels.count("NEUTRAL")

        pos_pct = round(pos_count / total * 100, 1)
        neg_pct = round(neg_count / total * 100, 1)
        neut_pct = round(neut_count / total * 100, 1)

        pos_texts = [t for t, r in zip(reviews, norm_labels) if r == "POSITIVE"]
        neg_texts = [t for t, r in zip(reviews, norm_labels) if r == "NEGATIVE"]

        pos_keys = top_keywords(pos_texts, top_n=6)
        neg_keys = top_keywords(neg_texts, top_n=6)

        # Conclusion based on percentages
        if pos_pct >= 70:
            conclusion = "✅ Overall Positive – Users love this product!"
        elif neg_pct >= 50:
            conclusion = "❌ Overall Negative – Users dislike this product."
        else:
            conclusion = "⚠️ Mixed Reviews – Users have varying opinions."

        return jsonify({
            "total": total,
            "pos_pct": pos_pct,
            "neg_pct": neg_pct,
            "neut_pct": neut_pct,
            "pos_keys": pos_keys,
            "neg_keys": neg_keys,
            "using_sample": using_sample,
            "conclusion": conclusion
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8501, debug=True)


