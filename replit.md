Overview
This is a full-stack web application for "All In One," a service provider offering IT hardware support, banking solutions, and web development services. The application is built as a modern React-based business website with a contact form system that allows potential clients to inquire about services and submit their requirements.

The application serves as a digital presence for the business, showcasing their three main service categories: Hardware Support (desktop/laptop repair, printer maintenance, network setup), Banking Support (mini banking services like cash withdrawal/deposit), and Web Development & Digital services (website design, hosting, digital marketing).

User Preferences
Preferred communication style: Simple, everyday language.

Recent Changes (August 18, 2025)
Brand Update & Content Changes
Mixed branding approach: "All In One" for company name, "Your One Stop Solutions" for hero section
Updated tagline to: "Smart IT. Secure Banking. Stunning Websites. All Under One Roof."
Changed all email addresses to: info@allinonepay.in
Added phone numbers to all office locations:
Ahmedabad: +(91) - 9649410824
Swaroopganj: +(91) - 9660306030
USA: +1 (917) 245-2515
SEO & Performance Optimizations
Enhanced HTML meta tags with comprehensive SEO data
Added Open Graph and Twitter Card meta tags
Implemented structured data (JSON-LD) for organization information
Optimized font loading with preload and fallback strategies
Added performance CSS optimizations
Improved accessibility with reduced motion preferences
Enhanced page titles and descriptions for better search rankings
GitHub Pages Deployment Support
Added 404.html file for client-side routing support
Implemented SPA routing fix script in main HTML
Created GitHub Actions workflow for automated deployment
Added comprehensive deployment documentation
Configured proper base path and asset loading for static hosting
System Architecture
Frontend Architecture
Framework: React 18 with TypeScript using Vite as the build tool
UI Library: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
Routing: Wouter for client-side routing (lightweight React router)
State Management: TanStack Query (React Query) for server state management
Styling: Tailwind CSS with custom design system including color variables and responsive design
Animation: Framer Motion for smooth animations and transitions
Form Handling: React Hook Form with Zod validation
Backend Architecture
Runtime: Node.js with Express.js framework
Language: TypeScript with ES modules
API Design: RESTful API with JSON responses
Error Handling: Centralized error handling middleware with structured error responses
Request Logging: Custom middleware for API request/response logging
Development: Hot reloading with Vite integration for full-stack development
Database & Storage
Database: PostgreSQL configured through Drizzle ORM
Schema Management: Drizzle Kit for migrations and schema management
Connection: Neon Database serverless PostgreSQL adapter
Fallback Storage: In-memory storage implementation for development/testing
Schema Definition: Shared schema between client and server with Zod validation
Data Models
Users: Basic user management with username/password authentication
Contact Messages: Form submissions with name, email, phone, service type, and message fields
Validation: Type-safe schemas using Drizzle-Zod integration
Development & Build Process
Monorepo Structure: Shared code between client and server in /shared directory
Build Process: Separate build processes for client (Vite) and server (esbuild)
Development: Concurrent development with Vite dev server and Express server
TypeScript: Strict type checking across the entire codebase
Path Aliases: Configured path aliases for clean imports (@, @shared)
External Dependencies
UI & Styling
Radix UI: Comprehensive set of accessible UI primitives for forms, dialogs, navigation
Tailwind CSS: Utility-first CSS framework for rapid UI development
Shadcn/ui: Pre-built component library providing consistent design system
Lucide React: Icon library for consistent iconography
React Icons: Additional icons including social media icons (Facebook, Twitter, LinkedIn, Instagram, WhatsApp)
Database & ORM
Neon Database: Serverless PostgreSQL database hosting
Drizzle ORM: Type-safe ORM with excellent TypeScript integration
Drizzle Kit: CLI tool for database migrations and schema management
Development Tools
Vite: Fast build tool and dev server with TypeScript support
ESBuild: Fast JavaScript bundler for server-side builds
TSX: TypeScript execution environment for development
Replit Integration: Specialized plugins for Replit development environment
Form & Validation
React Hook Form: Performant form library with minimal re-renders
Zod: Runtime type validation and schema definition
@hookform/resolvers: Integration between React Hook Form and validation schemas
Utilities
Date-fns: Date manipulation and formatting utilities
Class Variance Authority: Utility for creating variant-based component APIs
clsx & Tailwind Merge: Conditional className utilities for dynamic styling