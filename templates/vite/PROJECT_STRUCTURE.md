# Vite - React.js Project Structure

## Overview

This Vite + React.js project follows a structured organization that emphasizes:

- **Modern Build System**: Leveraging Vite's lightning-fast HMR and build optimization
- **Modular Architecture**: Clear separation of concerns with components organized by functionality
- **UI Component Management**:
  - Segregated third-party components (Shadcn)
  - Consistent theming and layout system
- **Asset Organization**: Optimized static asset management in the public directory
- **Custom Hooks**: Reusable logic extraction through custom React hooks
- **Type Safety**: Full TypeScript implementation throughout the project
- **Testing Infrastructure**: Comprehensive testing setup with Vitest

## Directory Structure

    .
    ├── public/                     # Static assets served directly by the web server.
    ├── src/                        # Contains the main source code of the application.
    │   ├── components/             # React components
    │   │   ├── Layouts/            # Reusable layout components
    │   │   └── ui/                 # Shadcn's components
    │   ├── hooks/                  # Custom React hooks for shared functionality.
    │   ├── assets/                 # Your project's assets
    │   ├── lib/                    # Helper functions and utility code.
    │   ├── app.tsx                 # Root React component of the application
    │   ├── main.tsx                # Entry point that renders the React app
    │   ├── index.css               # Global styles and CSS reset
    │   ├── vite-env.d.ts           # TypeScript declarations for Vite environment
    ├── index.html                  # HTML entry point for the application
    ├── PROJECT_STRUCTURE           # Project's structure document
    ├── .gitignore                  # GIT ignore patterns for dependencies, builds, and env files
    ├── components.json             # Config for Shadcn
    ├── package.json                # Project config, dependencies managment and scripts
    ├── tailwind.config.ts          # Config for Tailwind
    ├── postcss.config.mjs          # Config for PostCSS
    ├── setupTests.ts               # Additional config for testing
    ├── vite.config.ts              # Config for Vite
    ├── vitest.config.ts            # Config for Vitest
    ├── tsconfig.json               # Config for Typescript
    └── README.md

## Key Directories

### components/

React components organized by function:

- `Layouts/`: Reusable layout components
- `ui/`: Shadcn's components

## File Naming Conventions

You can use your own conventions in your project. For example:

- Component files: PascalCase (e.g., `Button.tsx`, `Header.tsx`)
- Utility files: camelCase (e.g., `formatDate.ts`, `helpers.ts`)
- Style files: Same name as component with `.css` extension
- Test files: `*.test.{ts, tsx}` or `*.spec.{ts, tsx}` should be placed alongside their corresponding components for better maintainability

## Additional Notes

This is further notes of your project. For example:

- All components should have their own directory with an index file
- Keep related files close to where they're used
- Follow consistent naming patterns within directories
