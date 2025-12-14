<!-- Tech Stack Badges -->
[![React Native](https://img.shields.io/badge/React_Native-0.81.5-61DAFB?logo=react&logoColor=white)](https://reactnative.dev)
[![Expo](https://img.shields.io/badge/Expo-~54.0-000020?logo=expo&logoColor=white)](https://expo.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-~5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Supabase](https://img.shields.io/badge/Supabase-2.86-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com)
[![Jest](https://img.shields.io/badge/Jest-30.2-C21325?logo=jest&logoColor=white)](https://jestjs.io)
[![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?logo=node.js&logoColor=white)](https://nodejs.org)

# Recipe Swiper App

A cross-platform mobile application for managing and discovering recipes, built with React Native, Expo, and Supabase. Users can browse recipes by categories, save favorites, rate recipes, and create their own culinary content.

## 📋 Features

- **User Authentication** — Sign up, login, and profile management
- **Recipe Browsing** — Explore recipes with categories, tags, and difficulty levels
- **Search & Filter** — Find recipes by ingredients, category, or tags
- **Favorites** — Save and manage your favorite recipes
- **Ratings & Reviews** — Rate recipes and read community feedback
- **Recipe Creation** — Create and share your own recipes with images
- **MVVM Architecture** — Clean separation of concerns with ViewModels and API layer

## 🏗️ Project Structure

```
Recipe-Swiper-App/
├── app/                    # Expo Router file-based routing
│   ├── (tabs)/             # Tab navigation screens
│   ├── _layout.tsx         # Root layout
│   └── modal.tsx           # Modal screens
├── lib/
│   ├── api/                # API layer (Supabase calls)
│   │   ├── auth.tsx
│   │   ├── recipies.tsx
│   │   ├── ratings.tsx
│   │   ├── reviews.tsx
│   │   └── saved.tsx
│   ├── viewmodels/         # Business logic hooks
│   │   ├── useAuth.tsx
│   │   ├── useRecipes.tsx
│   │   ├── useRatings.tsx
│   │   ├── useReviews.tsx
│   │   └── useSaved.tsx
│   ├── models/             # TypeScript type definitions
│   │   └── types.tsx
│   └── supabase.js         # Supabase client configuration
├── components/             # Reusable UI components
├── __tests__/              # Test suites
│   ├── unit/               # Unit tests
│   └── integration/        # Integration tests
└── constants/              # Theme and app constants
```

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

#### 1. **Install Node.js** (includes npm)
   
   **Windows:**
   - Download Node.js LTS from [nodejs.org](https://nodejs.org/)
   - Run the installer

   **macOS:**
   ```bash
   # Using Homebrew
   brew install node
   ```

   **Linux:**
   ```bash
   # Ubuntu/Debian
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

#### 2. **Other Requirements**
- **Expo Go app** — Install on your phone from [App Store](https://apps.apple.com/app/expo-go/id982107779) or [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
- **Git** — For cloning the repository
- **.env file** — With Supabase credentials

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd "Recipe-Swiper-App"
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   A `.env` file is already included with the necessary Supabase credentials.
   
   If you want to use your own Supabase instance, update the `.env` file:

4. **Start the development server**

   ```bash
   npm start
   ```

### Running the App

After starting the development server, you can:

- Press `a` — Open on Android emulator
- Press `i` — Open on iOS simulator
- Press `w` — Open in web browser
- Scan QR code with Expo Go app on your physical device

## 🌐 Deployment

This app is deployed on **Vercel** for web access.

### Live Vercel Demo

🔗 **[View Live Recipe Swiper App](https://asos-recipe-swiper.vercel.app/)**

### Web Limitations

The web version has some limitations compared to native apps, for example:
- **App needs refresh when put out of focus**
- No camera/image picker (uses file input instead)
- Limited native animations
- Some touch gestures may differ

For full functionality, use the native mobile apps.


## 🧪 Testing

This project uses Jest and React Native Testing Library for comprehensive testing coverage. It includes unit and also integration tests.

### Running Tests

```bash
npm test # Run all tests
```

### Other useful scripts

```bash
npm run build          # Build for web (production)
npm run android        # Run on Android
npm run ios            # Run on iOS
npm run web            # Run in web browser
npm run lint           # Run ESLint
```

### Testing structure

Tests are organized in the `__tests__/` directory:

- **`unit/api/`** — API function tests
- **`unit/viewmodels/`** — ViewModel/hook tests
- **`unit/components/`** — React component tests
- **`integration/`** — Multi-module workflow tests


## 🛠️ Technology Stack

### Frontend
- **React Native** — Cross-platform mobile framework
- **Expo** — Development platform and tooling
- **Expo Router** — File-based navigation

### Backend
- **Supabase** — Backend-as-a-Service (PostgreSQL, Authentication, Storage)

### State Management & Architecture
- **MVVM Pattern** — Model-View-ViewModel architecture
- **Custom Hooks** — ViewModels implemented as React hooks
- **AsyncStorage** — Persistent session storage

### Testing
- **Jest** — Testing framework
- **React Native Testing Library** — Component testing utilities
- **Jest Expo** — Expo-specific Jest preset


## 🔐 Authentication

The app uses Supabase Authentication with email/password. Sessions are persisted in AsyncStorage for seamless user experience across app restarts.

## 📱 Supported Platforms

- ✅ **iOS** (Simulator & Device)
- ✅ **Android** (Emulator & Device)
- ⚠️ **Web** (Limited support via Expo)


## 📄 License

This project is part of the ASOS course at FEI STU.
