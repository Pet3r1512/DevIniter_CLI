# Next.js Project Structure

## Overview

This Next.js project follows a structured organization that emphasizes:

- **File-based Routing**: Utilizing Next.js's built-in routing based on the file system
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
    │   ├── pages/                  # Next.js Pages
    │   │   ├── _app.tsx            # Custom App component for initializing pages and maintaining layout across the application
    │   │   ├── document.tsx        # Custom Document component for augmenting the application's HTML and managing global settings
    │   │   └── index.tsx           # Home page
    │   ├── components/             # React components
    │   │   ├── Layouts/            # Reusable layout components
    │   │   └── ui/                 # Shadcn's components
    │   ├── hooks/                  # Custom React hooks for shared functionality.
    │   ├── lib/                    # Helper functions and utility code.
    │   ├── styles                  # Global css styles
    ├── PROJECT_STRUCTURE           # Project's structure document
    ├── .gitignore                  # GIT ignore patterns for dependencies, builds, and env files
    ├── components.json             # Config for Shadcn
    ├── package.json                # Project config, dependencies management and scripts
    ├── tailwind.config.ts          # Config for Tailwind
    ├── postcss.config.mjs          # Config for PostCSS
    ├── setupTests.ts               # Additional config for testing
    ├── vitest.config.ts            # Config for Vitest
    ├── tsconfig.json               # Config for Typescript
    └── README.md

## Key Directories

### components/

Next.js app directory for file-based routing:

- `Layout/Page.tsx`: Page layout component

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
