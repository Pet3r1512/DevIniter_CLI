# Project Structure

## Overview

This structure reflects our CLI application organization with:

- Clear separation of commands and their handlers
- Configuration management
- Testing infrastructure

## Directory Structure

    .
    ├── src/                                 # Contains the main source code of the application
    │   ├── index.ts                         # Main entry point for CLI commands
    │   ├── scan_template.ts                 # Template scanning and validation logic
    │   ├── check_allow_to_install.ts        # Installation requirements checker
    ├── dist/                                # Contains compiled JavaScript output (when running "dev" or "build" script)
    │   ├── index.js                         # Compiled ESM bundle
    │   ├── index.cjs                        # Compiled CommonJS bundle
    ├── public/                              # Static assets
    ├── tests/                               # Test files
    ├── templates/                           # Templates folder
    │   ├── nextjs/                          # Next.js template
    │   ├── vite/                            # Vite template
    ├── LICENSE
    ├── CONTRIBUTING.md
    ├── PROJECT_STRUCTURE.md
    ├── CHANGELOG.md                         # Version notes
    ├── .gitignore                           # Git ignore patterns
    ├── package.json                         # Project config and dependencies
    ├── tsconfig.json                        # TypeScript configuration
    ├── tsup.config.ts                       # TSUP configuration
    ├── vitest.config.js                     # Vitest test configuration
    └── README.md

## Key Directories

### src/

CLI commands organized by function:

- Each command has its own directory containing:
  - `index.ts`: Main file to be compiled to Javascript
  - `scan_templates.ts`: Command to scan all templates inside "Templates" folder
  - `check_allow_to_install.ts`: Command to ask user's choices when the folder is not empty

## File Naming Conventions

- Command files: snake_case (e.g., `some_command.ts`, `scan_templates.ts`)
- Test files: `*.test.ts` or `*.spec.ts`

## Additional Notes

- Follow consistent error handling patterns
- Maintain comprehensive test coverage