# TalentLens

![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Turborepo](https://img.shields.io/badge/Monorepo-Turborepo-blue.svg)
![pnpm](https://img.shields.io/badge/pnpm-9.0.0-orange.svg)
![Node](https://img.shields.io/badge/Node.js-%3E%3D18.0.0-green.svg)
![React](https://img.shields.io/badge/React-19.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)
![Express](https://img.shields.io/badge/Express-5.2-lightgrey.svg)
![Prisma](https://img.shields.io/badge/ORM-Prisma-blue.svg)
![Redis](https://img.shields.io/badge/Cache-Redis-red.svg)
![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)

TalentLens is an AI-powered recruitment platform designed to help recruiters and organizations evaluate candidates, analyze profiles, perform intelligent matching, and streamline hiring workflows. Built as a high-performance monorepo, TalentLens leverages modern web technologies, scalable caching, and containerized deployment infrastructure.

## Table of Contents

- Project Overview
- Repository Tags
- Features
- System Architecture
- Prerequisites
- Installation
- Configuration
- Development Setup
- Usage Examples
- API Overview
- Contributing Guidelines
- License

## Project Overview

TalentLens provides a unified interface for candidate sourcing, resume analysis, and team building. The platform uses a microservice-ready monorepo structure with a React frontend single-page application and an Express REST API backend integrated with PostgreSQL and Redis.

## Repository Tags

`recruitment` `ai-platform` `talent-acquisition` `candidate-evaluation` `monorepo` `turborepo` `react19` `express` `prisma` `redis` `docker` `typescript`

## Features

- Monorepo structure powered by Turborepo and pnpm workspaces for fast, parallelized builds.
- Frontend application built with React 19, Vite, Tailwind CSS v4, Zustand, and Framer Motion.
- Backend REST API built with Express 5, TypeScript, and cookie-based JWT authentication.
- Distributed session management and caching powered by Redis.
- Database access layer using PostgreSQL and Prisma ORM with connection adapter integration.
- Shared workspace packages for UI components, TypeScript configurations, and ESLint rules.
- Production-ready containerization using Docker Compose and Nginx reverse proxy routing.

## System Architecture

The repository consists of applications in the apps directory and shared packages in the packages directory:

- apps/web: React 19 frontend application built with Vite.
- apps/api: Node.js Express API service for authentication and user management.
- packages/db: Database schema definitions and Prisma client initialization.
- packages/redis: Shared Redis client instance for session caching.
- packages/ui: Shared UI component library.
- packages/eslint-config: Shared ESLint configuration presets.
- packages/typescript-config: Shared TypeScript base configuration files.
- nginx: Reverse proxy setup routing web traffic to port 5173/80 and API traffic to port 5000.

## Prerequisites

Ensure you have the following software installed before running the project:

- Node.js: Version 18 or higher
- Package Manager: pnpm version 9.0.0 or higher
- Database: PostgreSQL server instance
- Cache: Redis server instance (version 7 or higher)
- Container Engine: Docker and Docker Compose (optional for containerized setup)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ShahbazCoder1/TalentLens.git
cd TalentLens
```

2. Install dependencies across all workspace packages:

```bash
pnpm install
```

3. Generate the Prisma database client:

```bash
pnpm --filter @repo/db exec prisma generate
```

## Configuration

Create a `.env` file in the root directory or inside `apps/api` with the following environment variables:

| Variable     | Description                                     | Example / Default                                    |
| :----------- | :---------------------------------------------- | :--------------------------------------------------- |
| DATABASE_URL | PostgreSQL connection string                    | postgresql://user:password@localhost:5432/talentlens |
| REDIS_URL    | Redis server connection string                  | redis://localhost:6379                               |
| JWT_SECRET   | Secret key used for signing JWT tokens          | your_secret_key                                      |
| PORT         | Port number for the Express API server          | 3000 (local) / 5000 (docker)                         |
| CLIENT_URL   | Frontend application URL for CORS configuration | http://localhost:5173                                |
| NODE_ENV     | Runtime environment mode                        | development / production                             |

## Development Setup

To start the development environment with hot-reloading across all applications:

```bash
pnpm dev
```

This command runs Turborepo, which starts:

- Frontend application on http://localhost:5173
- Backend API server on http://localhost:3000

To run type checking across all workspace packages:

```bash
pnpm check-types
```

To run linting across all packages:

```bash
pnpm lint
```

To format codebase files with Prettier:

```bash
pnpm format
```

## Usage Examples

### Running with Docker Compose

To spin up the entire application stack including Nginx, Web, API, and Redis containers:

```bash
docker compose up --build
```

Access the application through Nginx at:

- Web Application: http://localhost:80
- API Endpoints: http://localhost:80/api

### Building for Production

To compile and build all applications and packages:

```bash
pnpm build
```

## API Overview

The backend service provides authentication and user management endpoints:

- POST /api/auth/signup: Register a new user with name, email, and password. Sets HTTP-only authentication cookie and caches user data in Redis.
- POST /api/auth/login: Authenticate an existing user and set an HTTP-only JWT cookie.
- GET /api/auth/me: Retrieve the currently authenticated user profile from Redis cache or database. Requires valid authentication cookie.
- POST /api/auth/logout: Log out the current user, clear session cookie, and invalidate Redis cache.
- GET /db-check: Health check endpoint to verify database connectivity.

## Contributing Guidelines

We welcome contributions to TalentLens. Follow these steps to contribute:

1. Fork the repository on GitHub.
2. Create a feature branch for your work:

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes and ensure code formatting standards are met:

```bash
pnpm format
pnpm lint
pnpm check-types
```

4. Commit your changes with clear, descriptive commit messages:

```bash
git commit -m "Add feature: detailed description of changes"
```

5. Push to your branch and open a Pull Request against the main branch.
6. Ensure all automated continuous integration checks pass.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
