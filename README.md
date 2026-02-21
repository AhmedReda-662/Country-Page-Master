# Country Page Master

A responsive country ranking and detail application built with React. Browse, search, sort, and filter countries by population, area, name, region, and UN membership status. Data is sourced from the [REST Countries API](https://restcountries.com/).

> Challenge by [devChallenges](https://devchallenges.io/)

![React](https://img.shields.io/badge/React-19-blue)
![Vite](https://img.shields.io/badge/Vite-7-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5-green)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Pages & Routes](#pages--routes)

---

## Features

- **Country Ranking Table** — View all countries with their flag, name, population, area, and region.
- **Sort** — Sort countries by Population, Area, or Name.
- **Region Filter** — Filter countries by region (Africa, Americas, Asia, Europe, Oceania). Multiple regions can be selected simultaneously.
- **Status Filter** — Filter by UN membership or independence status.
- **Search** — Search countries by name, region, or subregion.
- **Country Detail Page** — Navigate to a dedicated detail page for each country (route ready, component placeholder).
- **Dark Theme** — Sleek dark UI with custom color palette.
- **Responsive Layout** — Built with Tailwind CSS and DaisyUI components.

---

## Tech Stack

| Category         | Technology                    |
| ---------------- | ----------------------------- |
| Framework        | React 19                      |
| Build Tool       | Vite 7                        |
| Styling          | Tailwind CSS 4 + DaisyUI 5    |
| State Management | Redux Toolkit + React Redux   |
| Server State     | TanStack React Query 5        |
| Routing          | React Router DOM 7            |
| Icons            | Lucide React                  |
| Font             | Be Vietnam Pro (Google Fonts) |
| Linting          | ESLint 9                      |

---

## Project Structure

```
country-page-master/
├── public/                        # Static assets (hero image, logo, icons)
├── src/
│   ├── main.jsx                   # Entry point — Redux Provider & App mount
│   ├── App.jsx                    # React Router & React Query setup
│   ├── AppLayout.jsx              # Shared layout (hero banner + content area)
│   ├── index.css                  # Global styles, Tailwind config, theme colors
│   ├── components/
│   │   ├── CountryRanking.jsx     # Main ranking page (sort, filter, table)
│   │   ├── CountryDetial.jsx      # Country detail page (placeholder)
│   │   └── UI/
│   │       ├── Spinner.jsx        # Loading spinner
│   │       └── Status.jsx         # "Found X countries" bar + search
│   ├── features/
│   │   ├── countryranking/
│   │   │   ├── countryRankingslice.js  # Redux slice (sortBy state)
│   │   │   ├── useCountryRanking.js    # React Query hook for fetching countries
│   │   │   ├── Operation.jsx           # Sidebar: SortBy + RegionFilter + Status
│   │   │   ├── SortBy.jsx              # Sort dropdown (Population/Name/Area)
│   │   │   ├── RegionFilter.jsx        # Region toggle buttons
│   │   │   ├── CountryStatus.jsx       # UN member / Independent checkboxes
│   │   │   ├── searchCountry.jsx       # Search input component
│   │   │   └── Table.jsx               # Country data table
│   │   └── countrydetail/
│   │       └── countryDetailslice.js   # Redux slice placeholder
│   ├── service/
│   │   └── apiCountry.js         # REST Countries API fetch functions
│   └── store/
│       └── store.js              # Redux store configuration
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## Getting Started

### Prerequisites

- **Node.js** >= 18
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/country-page-master.git
cd country-page-master

# Install dependencies
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

---

## Environment Variables

Create a `.env` file in the project root with the following variable:

```env
VITE_BASE_URL=https://restcountries.com/v3.1
```

The application uses this base URL to call the REST Countries API endpoints.

---

## Available Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the Vite development server |
| `npm run build`   | Build for production              |
| `npm run preview` | Preview the production build      |
| `npm run lint`    | Run ESLint                        |

---

## Pages & Routes

| Route                   | Component        | Description                                        |
| ----------------------- | ---------------- | -------------------------------------------------- |
| `/`                     | `CountryRanking` | Main page — country table with filters and sorting |
| `/country/:countryName` | `CountryDetail`  | Detail page for a specific country (WIP)           |

Both routes share the `AppLayout` wrapper which renders the hero banner and a centered content card.
