# Overview

This is a Bootstrap-based website for "Botón Creativo", a creative agency that offers web design, graphic design, audiovisual content, and community management services. The application features a modern landing page with sections for services, portfolio, contact form, FAQ, and company information. It's built with HTML, CSS, Bootstrap 5, and vanilla JavaScript frontend with an Express.js backend with PostgreSQL database integration.

# User Preferences

Preferred communication style: Simple, everyday language.
Programming language preference: JavaScript instead of TypeScript for server-side code.
Styling preference: Pure CSS instead of Tailwind CSS.

# System Architecture

## Frontend Architecture
- **Framework**: Static HTML5 with Bootstrap 5 for responsive design and UI components
- **UI Library**: Bootstrap 5.3.2 with Bootstrap Icons for consistent, accessible components
- **Styling**: Custom CSS with Bootstrap framework and CSS variables for theming
- **JavaScript**: Vanilla JavaScript for interactivity, form handling, and animations
- **Forms**: Native HTML5 forms with custom JavaScript validation and API integration

## Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Database**: PostgreSQL with Neon serverless database provider
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **Session Management**: Express sessions with PostgreSQL session store using connect-pg-simple

## Data Storage
- **Primary Database**: PostgreSQL hosted on Neon serverless platform
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Fallback Storage**: In-memory storage implementation for development/testing scenarios
- **Tables**: Users table for authentication and contact_messages table for form submissions

## API Design
- **Pattern**: RESTful API with JSON request/response format
- **Endpoints**: 
  - POST /api/contact for contact form submissions
  - GET /api/contact for retrieving contact messages
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Validation**: Server-side validation using shared Zod schemas

## Development Environment
- **Build System**: Vite for fast development server and optimized production builds
- **Development Server**: Hot module replacement and runtime error overlay for enhanced DX
- **TypeScript**: Strict type checking across the entire codebase
- **Path Resolution**: Custom path aliases for clean imports (@/, @shared/, @assets/)

# External Dependencies

## UI and Styling
- **shadcn/ui**: Component library with Radix UI primitives for accessible components
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets including social media icons

## Database and ORM
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **Drizzle ORM**: TypeScript ORM for database operations and migrations
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **Zod**: TypeScript-first schema validation library

## State Management and API
- **@tanstack/react-query**: Server state management and data fetching
- **Wouter**: Lightweight routing library for single-page applications

## Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer

## Runtime Environment
- **Node.js**: Server runtime environment
- **Express.js**: Web application framework for the backend API