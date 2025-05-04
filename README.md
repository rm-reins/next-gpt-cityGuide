# UrbanIQ Explorer

> **Note:** This is a legacy app that is being rebuilt with a modern tech stack, improved UI/UX, and refined features **[here](https://github.com/Freemasoid/nextjs-urbaniq-explorer)**.

## Overview

UrbanIQ Explorer is an AI-driven city guide application that helps users discover fascinating destinations and plan their city tours with ease. The application leverages OpenAI's GPT to provide personalized recommendations and create one-day tour itineraries.

## Features

- **AI-Powered City Guide**: Get personalized recommendations for city destinations using OpenAI's GPT
- **Tour Creation**: Generate one-day tour itineraries for cities around the world
- **Tour History**: View and manage previously created tours
- **Secure Authentication**: Login via GitHub, Google or E-Mail with authentication powered by Clerk
- **Responsive Design**: Optimized for both desktop and mobile experiences

## Technologies

### Frontend

- **Next.js 14** - React framework with server and client components
- **TailwindCSS** - For styling with DaisyUI components
- **Tanstack React Query** - For server state management and data fetching

### Backend

- **Next.js API Routes** - For serverless API endpoints
- **Prisma** - ORM for database access and migrations
- **PostgreSQL on Render** - Relational database for storing tour data
- **OpenAI API** - For AI-powered city recommendations

### Authentication & Deployment

- **Clerk** - For secure authentication

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- pnpm
- PostgreSQL database

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/next-gpt-cityguide.git
cd next-gpt-cityguide
```

2. Install dependencies

```bash
pnpm install
```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:

```
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"
OPENAI_API_KEY="your_openai_api_key"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
UNSPLASH_KEY="your_unsplash_key"
```

4. Initialize the database

```bash
npx prisma migrate dev --name init
```

5. Run the development server

```bash
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## License

This project is licensed under the MIT License.
