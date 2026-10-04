# 🏠 FlatBuddy — Algorithmic Flat-Sharing & Compatibility Engine

> **12-Hour Hackathon Product**: Built for students and young tech professionals in urban hubs (Bengaluru, Mumbai, Pune, Gurgaon) struggling with exorbitant rents and roommate friction.

---

## ⚡ The Core Problem

In Indian tier-1 cities:
1. A decent 2BHK/3BHK in hubs like HSR Layout, Koramangala, or Powai costs ₹35,000 to ₹75,000.
2. Single-room seekers are forced into roommate situations with total strangers.
3. Existing portals only show *vacant walls*, not the *humans* you will live with.
4. **Lifestyle mismatches ruin mental health**: Night owls paired with early risers, loud party hosts paired with quiet introverts, pure-veg kitchens vs non-veg cooking, and messy chore habits.
5. **The Roommate Drama**: Who pays what when Room A has an ensuite bathroom and balcony, and Room B is smaller?

---

## 🚀 Key Features

### 1. 🎯 Real-Time 6-Axis Compatibility Radar Chart (Wow Feature #1)
- Powered by **Recharts** SVG engine.
- Instant multi-vector calculation comparing User vs Roommates across:
  - **Sleep Sync**: Night owl vs Early bird circadian alignment.
  - **Cleanliness Standard**: Monica Geller (spotless) vs Relaxed.
  - **Social Vibe**: Sanctuary quiet vs Weekend party host.
  - **Dietary Match**: Strict pure-veg kitchen vs Non-veg foodie.
  - **Work Sync**: 100% WFH Zoom calls vs 9-to-5 Office.
  - **Budget Alignment**: Rent overlap ratio.
- Instant dealbreaker alerts (Smoking, Pets, Veg-only preferences).

### 2. 🧮 Algorithmic Fair Rent & Cost Splitter (Wow Feature #2)
- Solves the #1 flatmate debate before moving in.
- Dynamically calculates mathematically fair room rent based on:
  - Square footage
  - Ensuite attached bathroom (+25% premium weight)
  - Private balcony (+15% premium weight)
- Equal utility bill division (Maid, Cook, 1 Gbps Fiber WiFi, Electricity).
- Generates a **1-Click Copyable Flatmate Agreement Summary**.

### 3. 👥 Team-Up Flat-Hunting Squads
- Solo hunters can pool their budgets (e.g., ₹18,000 + ₹18,000 = ₹36,000) to negotiate directly with landlords for full 2BHK/3BHK flats, bypassing individual room brokerages.

### 4. 💬 Live Simulated Chat & Icebreakers
- Contextual 1-click icebreaker prompts (*"Saw your sleep & cleanliness match! Interested in checking out 2BHKs in HSR?"*).
- Realistic typing indicators and automated persona responses.

### 5. 🧑‍⚖️ 1-Click Judge Demo Switcher
- Floating top banner allowing judges to immediately switch personas:
  - **Rohan** (Night Owl Backend Dev @ Swiggy)
  - **Ananya** (Early Bird Product Designer @ Razorpay)
  - **Kabir** (Social Founder & Dog Parent @ CreatorStack, Mumbai)
- Watch compatibility scores instantly shift across the entire feed!

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite (TypeScript)
- **Styling**: Tailwind CSS + Glassmorphism & Custom Accents
- **Icons**: Lucide React
- **Data Visualization**: Recharts (Radar Chart & Polar Grids)
- **Effects**: Canvas Confetti (triggers on >90% Soulmate matches)
- **Architecture**: Zero-crash offline-first state backed by high-fidelity seed personas and LocalStorage.

---

## 🏃 Running the Application

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle
npm run build
```

Open `http://localhost:3000` (or `http://localhost:5173`) in your browser to experience FlatBuddy.
