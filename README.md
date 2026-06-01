# Dressage Test Reader

A voice-guided PWA for practicing dressage tests solo. Pick a level and test, then ride hands-free — each movement is shown, spoken aloud, and plotted on an arena diagram. Say "Next" to advance.

Covers all USEF 2023 tests: Training, First, Second, Third, and Fourth Level (Tests 1–3 each).

## Files

- `index.html` — the app (UI + logic)
- `Tests/tests.js` — all test data (levels → tests → movements)
- `Tests/*.pdf` — the official score sheets, linked from each test card
- `manifest.json` — PWA manifest for installability
- `sw.js` — service worker for offline support

## Adding or editing a test

Edit `Tests/tests.js`. Each level is an object in `LEVELS` with a `tests` array; each
test has `name`, `detail`, `pdf`, `purpose`, and a `movements` array. A movement is
`{ marker, text, directive }` — use `/` in `marker` to pair sub-markers with sentences
in `text` (e.g. `"A / X"` with `"Down centerline. Halt, salute."`).

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g. `dressage-reader`)
2. Push these files to the `main` branch
3. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
4. GitHub will give you a URL like `https://yourusername.github.io/dressage-reader`

## Install on iPhone

1. Open the GitHub Pages URL in **Safari** on your iPhone
2. Tap the **Share** button → **Add to Home Screen**
3. Tap **Add** — it installs like a native app
4. Open it from your home screen, tap **Mic Off** to enable the microphone, allow access
5. Pick a level and a test to begin — then use voice commands hands-free

## Voice Commands

| Say | Action |
|-----|--------|
| Next / Go | Advance to next movement |
| Back | Return to previous movement |
| Repeat | Re-read the current movement |
| Go Back / Home | Return to the test selector |

The footer also has a **Sound** toggle (silent review mode) and a **Voice** picker for
choosing a higher-quality device voice.
