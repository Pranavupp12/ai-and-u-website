# AI & You Website

This is the repository for the AI & You website, a modern and interactive web application built with React, Vite, and TypeScript.

## 🚀 About the Project

This project is a showcase website for an AI agent named Nora. The website is designed to be visually appealing and engaging, with a focus on smooth animations and a clean user interface. It highlights the features, performance, and brand associations of the AI agent.Live Preview - https://aiandyouwebsite.vercel.app/

### ✨ Key Features:

  * **Interactive Hero Section:** An animated hero section with a typing effect to introduce the AI agent.
  * **Navigation bar:** A different which can be used by clicking the pill buttons below input text area and press the send button to navigate    to that section of the page
  * **Smooth Scrolling:** Implemented using `react-lenis` for a fluid user experience.
  * **Component-Based Architecture:** Built with a modular and reusable component structure.
  * **Routing:** Uses `react-router-dom` for client-side routing.
  * **Styling:** Styled with Tailwind CSS and `shadcn/ui` for a modern and consistent design.
  * **Animations:** Utilizes `framer-motion` and `gsap` for engaging animations and transitions.
  * **Data Visualization:** Includes charts for displaying model performance metrics using `recharts`.

## 🛠️ Tech Stack

  * **Framework:** [React](https://reactjs.org/)
  * **Build Tool:** [Vite](https://vitejs.dev/)
  * **Language:** [TypeScript](https://www.typescriptlang.org/)
  * **Styling:** [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/)
  * **Routing:** [React Router](https://reactrouter.com/)
  * **Animation:** [Framer Motion](https://www.framer.com/motion/), [GSAP](https://www.google.com/search?q=https://greensock.com/gsap/)
  * **State Management:** [TanStack Query](https://tanstack.com/query/latest)
  * **Linting:** [ESLint](https://eslint.org/), [TypeScript ESLint](https://typescript-eslint.io/)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

  * Node.js (v18 or higher recommended)
  * npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/pranavupp12/ai-and-u-website.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd ai-and-u-website
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run the following command:

```sh
npm run dev
```

This will start the development server at `http://localhost:8080`.

### Building for Production

To create a production build, run:

```sh
npm run build
```

This will generate a `dist` directory with the optimized and minified files for deployment.

## 📁 Project Structure

```
ai-and-u-website/
├── public/
│   ├── images/
│   └── ...
├── src/
│   ├── components/
│   │   ├── ui/
│   │   └── ...
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
└── vite.config.ts
```

  * `public/`: Contains static assets like images, fonts, and the `index.html` file.
  * `src/`: Contains the main source code for the application.
      * `components/`: Contains all the React components, with `ui/` for reusable UI components.
      * `hooks/`: Contains custom React hooks.
      * `lib/`: Contains utility functions.
      * `pages/`: Contains the page components for routing.
      * `App.tsx`: The main application component where routing is handled.
      * `main.tsx`: The entry point of the application.
  * `package.json`: Lists the project dependencies and scripts.
  * `vite.config.ts`: Configuration file for Vite.

