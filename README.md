# Review Radar (MVP)

## Quick start (local)
1. Create & activate a Python virtualenv:
   - mac/linux:
     python3 -m venv venv
     source venv/bin/activate
   - windows:
     python -m venv venv
     .\\venv\\Scripts\\Activate.ps1

2. Install deps:
   pip install -r requirements.txt

3. Run app:
   streamlit run app.py

4. Load Chrome extension:
   - Open chrome://extensions, enable Developer mode, Load unpacked -> select review-radar/extension.

The extension opens the app with the current product URL; the app scrapes or falls back to sample reviews for demo.
