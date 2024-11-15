# Next.js Project Structure

## Overview

This Next.js project follows a structured organization that emphasizes:

- **Modular Architecture**: Clear separation of concerns with components organized by functionality
- **UI Component Management**:
  - Segregated third-party components (Shadcn, Aceternity)
  - Consistent theming and layout system
- **Asset Organization**: Optimized static asset management in the public directory
- **State Management**: Efficient global state handling using Zustand stores
- **Custom Hooks**: Reusable logic extraction through custom React hooks
- **Type Safety**: Full TypeScript implementation throughout the project
- **Testing Infrastructure**: Comprehensive testing setup with Vitest

## Directory Structure

    .
    ├── public/                     # Static assets served directly by the web server.
    ├── prisma/                     # Prisma's schemas and migrations
    ├── src/                        # Contains the main source code of the application.
    │   ├── components/             # React components
    │   │   ├── Theme/              # Components for Themes
    │   │   ├── Layouts/            # Reusable layout components
    │   │   └── shadcn/ui/          # Shadcn's components
    │   ├── hooks/                  # Custom React hooks for shared functionality.
    │   ├── pages/                  # Page-level components and routing.
    │   ├── lib/                    # Helper functions and utility code.
    │   └── styles/                 # CSS and styling files.
    ├── PROJECT_STRUCTURE           # Project's structure document
    ├── .gitignore                  # GIT ignore patterns for dependencies, builds, and env files
    ├── components.json             # Config for Shadcn
    ├── package.json                # Project config, dependencies managment and scripts
    ├── tailwind.config.ts          # Config for Tailwind
    ├── postcss.config.mjs          # Config for PostCSS
    ├── next.config.mts             # Config for Nextjs
    ├── setupTests.ts               # Additional config for testing
    ├── vitest.config.ts            # Config for Vitest
    ├── tsconfig.json               # Config for Typescript
    ├── theme.config.tsx            # Config for customized Nextra
    └── README.md

## Key Directories

### components/

React components organized by function:

- `Layouts/`: Reusable layout components
- `Theme/`: Components for interacting with theme (dark/light mode)
- `shadcn/ui/`: Shadcn's components

### pages/

Next.js pages directory for routing:

- `_app.tsx`: Custom App component for global configurations
- `_document.tsx`: Custom Document component for HTML structure
- `index.tsx`: Homepage of the application

### prisma/

Database layer:

- Schema definitions
- Migrations
- Seed data

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
