# Memoria NotePro

A lightweight, futuristic notes app built using **HTML + CSS + JavaScript**.
Now includes an optional **desktop window GUI mode** (Electron), **offline recovery tools**, and **PWA-style offline caching** for browser use.

## Features
- Study notes with subject filter, search, edit, delete
- Extra notes area with persistent storage
- File Vault (PDF/MP3/MP4 preview + office file download)
- Background presets (including Matrix Rain)
- Command console
- Recovery tools (fully offline):
  - Create / restore local recovery snapshots
  - Run local diagnostics
  - Safe Mode toggle
  - Full backup export
  - Factory reset (local-only)
- Local-first storage (`localStorage` + `IndexedDB`)

## Run as Desktop Window (GUI)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Launch desktop app:
   ```bash
   npm start
   ```

This opens Memoria as a standalone desktop window (no internet required for core usage).

## Run in Browser
```bash
python3 -m http.server 4173
```
Then open `http://localhost:4173/index.html`.


## Offline Web Mode (No Internet)
- Start once in a browser-served session (`python3 -m http.server 4173`).
- The app registers `sw.js` and caches core assets for offline reloads.
- Recovery snapshots and note data remain local in `localStorage` + `IndexedDB`.

## Data Storage
All data is stored locally on your machine/browser profile.
No cloud backend is required.

## Author
**Umesh Chandra Karthikeya**

**Gowri Shankar**
