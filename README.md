# Aymen Khaled — Developer Portfolio

A personal portfolio presenting my software engineering background, technical skills, experience, and selected projects.

## Overview

This single-page React site includes sections for an introduction, technical skills, experience, projects, and contact information. It is a portfolio application, not a reusable Vite starter template.

## Tech stack

- React and Vite
- Tailwind CSS
- Framer Motion
- Redux Toolkit
- EmailJS for the contact experience

## Run locally

**Requirements:** Node.js and npm.

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

Run the configured lint checks:

```bash
npm run lint
```

## Configuration

The contact form uses EmailJS. Set the values expected by the code in your local environment; do not commit service keys or personal credentials. For a Vite app, browser-exposed environment variables are not secrets.

## Repository structure

- `src/components/` — portfolio sections and UI components
- `src/assets/` — application assets
- `src/state/` — shared application state
- `public/` — static assets

## Maintaining the portfolio

Keep project links, work history, downloadable CV, and contact information current. Before deploying, run lint and build and check the site on mobile and desktop.

## Status

Personal portfolio. Review public content and outbound links before using it for job applications.
