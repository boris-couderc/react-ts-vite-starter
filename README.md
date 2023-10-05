# Custom react starter

Personnal custom React starter to build React project faster !
With features oriented architecture, state management, CSS tools and code checking.

## Overview

- [React 18](https://react.dev/) to build interfaces
- [React Router](https://reactrouter.com/) for routing
- [TypeScript](https://react-typescript-cheatsheet.netlify.app/)
- [Vite](https://vitejs.dev/) as fast build tool
- [ESLint](https://eslint.org/) to analyse code quality
- [Prettier](https://prettier.io/) as code formatter
- [Redux Toolkit](https://redux-toolkit.js.org/) to manage state
- [RTQ Query](https://redux-toolkit.js.org/rtk-query/overview) to fetch and cache data
- [PostCSS](https://postcss.org/) to add useful CSS tools
- [CSS Modules](https://vitejs.dev/guide/features.html#css) to avoid CSS conflicts
- [Classnames](https://www.npmjs.com/package/classnames) to manipulate CSS class selectors
- [SVGR](https://www.npmjs.com/package/vite-plugin-svgr) to transform SVGs into React components

## Directory Structure

```
.
├── public/ - Static public assets
├── src/ - Application source code
│   ├── app/
│   │   ├── App.tsx - Global app configuration
│   │   ├── router.tsx - React router configuration
│   │   └── store.ts - Global Redux store configuration
│   ├── assets/ - Global static assets
│   ├── components/ - Global Reusable UI components without logic
│   │   ├── ComponentName/
│   │   │   ├── ComponentName.module.pcss
│   │   │   └── ComponentName.tsx
│   │   ├── ...
│   │   └── index.ts
│   ├── features/ - Logic components for app fonctionnality
│   │   ├── featuresName/
│   │   │   ├── ComponentName/
│   │   │   │   ├── ComponentName.module.pcss
│   │   │   │   └── ComponentName.tsx
│   │   │   ├── ...
│   │   │   └── slice.ts - Redux feature slice configuration (optional)
│   │   │   └── api.ts - Redux feature api configuration (optional)
│   │   ├── ...
│   │   ├── index.ts
│   │   └── types.ts
│   ├── icons/ - SVG icons system
│   │   ├── Icon.module.css - Icons CSS styles
│   │   ├── Icon.tsx - Icon UI component
│   │   ├── icons.svg - SVG icon symbols
│   │   └── types.ts
│   ├── layouts/ - Layout components for page structure
│   │   ├── LayoutComponentName/
│   │   │   ├── LayoutComponentName.module.pcss
│   │   │   └── LayoutComponentName.tsx
│   │   ├── ...
│   │   └── index.ts
│   ├── pages/ - Global page components
│   │   ├── PageComponentName/
│   │   │   ├── PageComponentName.module.pcss
│   │   │   └── PageComponentName.tsx
│   │   ├── ...
│   │   └── index.ts
│   ├── styles/ - CSS generic styles
│   │   ├── _breakpoints.pcss - Breakpoints CSS variables
│   │   ├── _colors.pcss - Colors CSS variables
│   │   ├── _fonts.pcss - Font-face rules
│   │   ├── _generic.pcss - Generic CSS styles
│   │   ├── _heading.pcss - Generic heading CSS styles
│   │   ├── _normalize.pcss - Normalize styles
│   │   ├── _variables.pcss - Global CSS variables
│   │   ├── ...
│   │   └── index.pcss - CSS entry point 
│   ├── utils/ - Global utility functions
│   └── index.tsx - Main React entry point
├── index.html — Main HTML page container
├── .env — Application settings
├── .eslintrc.cjs — ESLint configuration
├── .postcssrc.json — PostCSS configuration
├── .prettierrc — Prettier configuration
├── tsconfig.json — Root TypeScript configuration
├── vite.config.ts — Vite configuration
.
```

## Scripts

- `npm run dev` to start dev server
- `npm run build` to build for production
- `npm run preview` to locally preview production build
- `npm run lint` to validate the code using ESLint
- `npm run lint:fix` to validate the code and fix potential errors
- `npm run prettier` to check files format with Prettier
- `npm run prettier:fix` to check files format and rewrites unformatted files
- `npm run format` to run prettier:fix and lint:fix 
