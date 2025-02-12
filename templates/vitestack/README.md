# Vitestack – Vite + React + TanStack Starter Template

Vitestack is a modern starter template powered by **Vite**, **React**, and **TanStack**. It offers a fast and efficient development setup with optimized configurations for state management, data fetching, and performance.

## Features

- ⚡ **Ultra-Fast Development** – Leverage Vite’s blazing-fast HMR and build speed.
- 📦 **Component-Driven Architecture** – Easily manage reusable UI components.
- 🔄 **Efficient Data Fetching** – Seamless API integration with TanStack Query.
- 🚀 **Optimized Performance** – Modern bundling, code splitting, and tree-shaking.
- 🛠 **Preconfigured ESLint & TypeScript** – Ensures code consistency and maintainability.

## React & Vite Setup

This template provides a minimal yet powerful setup to get **React** working in **Vite** with Hot Module Replacement (HMR) and a solid ESLint configuration.

### Official Plugins Used:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) – Uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) – Uses [SWC](https://swc.rs/) for Fast Refresh with better performance.

## Expanding the ESLint Configuration

For production applications, we recommend enhancing the ESLint configuration for type-aware linting.

### 1. Update `parserOptions` in ESLint:

```js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
    },
  },
});
```
