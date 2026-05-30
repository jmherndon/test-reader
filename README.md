# Dressage Test Reader

A voice-guided PWA for practicing dressage tests solo. Say "Start" to begin, "Next" to advance each movement.

## Files

- `index.html` — the app
- `manifest.json` — PWA manifest for installability
- `sw.js` — service worker for offline support

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g. `dressage-reader`)
2. Push these files to the `main` branch
3. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
4. GitHub will give you a URL like `https://yourusername.github.io/dressage-reader`

## Install on iPhone

1. Open the GitHub Pages URL in **Safari** on your iPhone
2. Tap the **Share** button → **Add to Home Screen**
3. Tap **Add** — it installs like a native app
4. Open it from your home screen, tap **Enable Voice Commands**, allow microphone
5. Say **"Start"** to begin your test

## Voice Commands

| Say | Action |
|-----|--------|
| Start | Begin the test |
| Next / Go | Advance to next movement |
| Restart | Reset to beginning |
