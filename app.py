# app.py (lightweight hackathon version with conclusion)
import streamlit as st
from transformers import pipeline
from utils import scrape_reviews_from_page, load_sample_reviews, top_keywords
import matplotlib.pyplot as plt

st.set_page_config(page_title="Review Radar", layout="centered")
st.title("🔎 Review Radar")

query_params = st.experimental_get_query_params()
target = query_params.get("target", [None])[0]

if not target:
    target = st.text_input("Paste product page URL here")
analyze = st.button("Analyze") if target else None

# --- Load small 2-class sentiment model (DistilBERT) ---
@st.cache_resource
def load_model():
    return pipeline(
        "sentiment-analysis",
        model="distilbert-base-uncased-finetuned-sst-2-english"
    )

model = load_model()

# --- Core analysis ---
def analyze_reviews(url):
    st.info("Fetching reviews from page...")
    reviews = scrape_reviews_from_page(url)
    if not reviews:
        st.warning("Could not scrape reviews reliably. Using sample reviews for demo.")
        reviews = load_sample_reviews()
        using_sample = True
    else:
        using_sample = False

    st.info(f"Running sentiment on {len(reviews)} reviews...")

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

    return {
        "total": total,
        "pos_pct": pos_pct,
        "neg_pct": neg_pct,
        "neut_pct": neut_pct,
        "pos_keys": pos_keys,
        "neg_keys": neg_keys,
        "using_sample": using_sample,
        "conclusion": conclusion
    }

# --- UI ---
if target and (analyze or query_params.get("auto", [None])[0] == "1"):
    out = analyze_reviews(target)

    st.subheader("Summary")
    emoji = "😍" if out['pos_pct'] >= 70 else ("😐" if out['pos_pct'] >= 40 else "😡")
    verdict = "Mostly Loved" if out['pos_pct'] >= 70 else ("Mixed Reviews" if out['pos_pct'] >= 40 else "Mostly Negative")
    st.markdown(f"### {emoji} {verdict}")
    st.write(f"Total reviews analyzed: **{out['total']}**")

    # Pie chart
    fig, ax = plt.subplots()
    ax.pie(
        [out['pos_pct'], out['neut_pct'], out['neg_pct']],
        labels=["Positive", "Neutral", "Negative"],
        autopct="%1.1f%%",
        colors=["#4CAF50", "#FFC107", "#F44336"]
    )
    st.pyplot(fig)

    # Two-column keywords
    col1, col2 = st.columns(2)
    with col1:
        st.write("**Top Positive Keywords**")
        st.write(", ".join(out['pos_keys']) if out['pos_keys'] else "—")
    with col2:
        st.write("**Top Negative Keywords**")
        st.write(", ".join(out['neg_keys']) if out['neg_keys'] else "—")

    # Conclusion
    st.markdown(f"### Conclusion")
    st.write(out['conclusion'])

    # Export report
    report = f"""Review Radar Report
URL: {target}
Analyzed: {out['total']} reviews
Positive: {out['pos_pct']}%
Neutral: {out['neut_pct']}%
Negative: {out['neg_pct']}%
Top positives: {', '.join(out['pos_keys'])}
Top negatives: {', '.join(out['neg_keys'])}
Conclusion: {out['conclusion']}"""

    st.text_area("Copy-ready summary", value=report, height=180)
    st.download_button("Download report", data=report, file_name="review_radar_report.txt")

    if out['using_sample']:
        st.warning("This demo is showing sample reviews because scraping failed or was blocked.")

if not query_params.get("target") and target and not analyze:
    st.write("Press Analyze to run the pipeline.")
