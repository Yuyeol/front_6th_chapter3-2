# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `pnpm dev` - Start development environment with both frontend and backend servers
- `pnpm start` - Start frontend development server only
- `pnpm run server` - Start backend server only
- `pnpm run server:watch` - Start backend server with file watching
- `pnpm build` - Build for production (TypeScript compilation + Vite build)

### Testing
- `pnpm test` - Run tests with Vitest
- `pnpm run test:ui` - Run tests with Vitest UI
- `pnpm run test:coverage` - Run tests with coverage report

### Code Quality
- `pnpm lint` - Run both ESLint and TypeScript checks
- `pnpm run lint:eslint` - Run ESLint only
- `pnpm run lint:tsc` - Run TypeScript type checking only

## Architecture Overview

This is a React-based calendar/event management application built with TypeScript, Material-UI, and Vite.

### Frontend Structure
- **Main Component**: `App.tsx` - Contains the primary calendar interface with three main sections:
  - Event creation/editing form (left panel)
  - Calendar view with week/month toggle (center)
  - Event list with search functionality (right panel)

### Custom Hooks Architecture
The application uses a modular custom hooks approach for state management:
- `useCalendarView` - Manages calendar view state (week/month), current date navigation, and holiday data
- `useEventForm` - Handles event form state, validation, and time error handling
- `useEventOperations` - Manages CRUD operations for events (save, delete, edit)
- `useNotifications` - Handles notification system and alert management
- `useSearch` - Manages event search and filtering functionality

### Utility Functions
- `dateUtils.ts` - Date formatting, week/month calculations, event filtering by day
- `eventOverlap.ts` - Detects scheduling conflicts between events
- `eventUtils.ts` - Event manipulation and processing utilities
- `notificationUtils.ts` - Notification timing and alert logic
- `timeValidation.ts` - Time input validation and error messaging

### Backend
- Simple Express.js server (`server.js`) providing REST API endpoints
- Data persistence using JSON file (`src/__mocks__/response/realEvents.json`)
- Endpoints: GET/POST/PUT/DELETE `/api/events`

### Testing Setup
- **Framework**: Vitest with jsdom environment
- **Testing Library**: React Testing Library
- **Mocking**: MSW (Mock Service Worker) for API mocking
- **Test Structure**:
  - `__tests__/hooks/` - Custom hook unit tests
  - `__tests__/unit/` - Utility function tests
  - `__tests__/medium.integration.spec.tsx` - Integration tests
- **Test Environment**: Fixed system time to '2025-10-01' UTC for consistent test results

### Key Dependencies
- **UI**: Material-UI (@mui/material, @mui/icons-material)
- **Notifications**: notistack for snackbar notifications
- **Animation**: framer-motion
- **State Management**: React hooks (no external state management library)

### Development Notes
- Uses pnpm as package manager
- Vite for build tooling and development server
- Concurrent development setup runs both frontend (port default) and backend (port 3000)
- API proxy configured in Vite to forward `/api/*` requests to backend server