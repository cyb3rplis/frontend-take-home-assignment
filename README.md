# Rick and Morty Character Explorer

A frontend take-home assignment.

## Overview

Build a character explorer for the [Rick and Morty API](https://rickandmortyapi.com/documentation). The application should allow users to browse, filter, and favorite characters from the show.

**Time expectation**: 3-4 hours. We value clean, well-structured code over feature completeness. If you run out of time, focus on quality over quantity and leave TODO comments explaining what you would do next.

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Type-check
npx tsc --noEmit

# Lint
npm run lint
```

The app runs at `http://localhost:5173` by default.

## What We Provide

- A Vite + React + TypeScript scaffold
- TypeScript type definitions for the Rick and Morty API in `src/types/index.ts`
- A stub API client in `src/api/client.ts`
- Empty directories for `components/` and `hooks/` as a suggested structure

You are free to install additional libraries (state management, routing, UI components, testing, etc.), but be prepared to explain why you chose them.

## Requirements

### 1. Character Browser with Pagination

- Fetch and display characters from `GET https://rickandmortyapi.com/api/character`
- Show characters in a card-based layout with: image, name, status, species, gender, and location
- Implement Previous/Next pagination (the API returns 20 results per page)
- Show the current page and total pages
- Display a loading indicator while data is being fetched
- Handle and display errors gracefully (network failures, empty results)

### 2. Filter Panel

Build a filter form that allows users to narrow down characters:

- **Name**: text input (free text search)
- **Status**: dropdown with options: All, Alive, Dead, Unknown
- **Gender**: dropdown with options: All, Female, Male, Genderless, Unknown
- **Species**: text input (e.g., "Human", "Alien")
- **Created date range**: two date inputs (from / to) to filter characters by their `created` timestamp
- **Episodes**: multi-select dropdown that filters characters by the episodes they appear in.

### 3. Character Detail View

- Clicking a character should open a detail view (e.g. modal, panel, sidebar, or new page - it´s your choice)
- Show all character information
- Fetch and display the episodes the character appears in (the character object contains an array of episode URLs)
- Handle loading and error states for the episode data

### 4. Favorites

- Users can favorite/unfavorite characters
- Store favorites in React state
- Provide a way to view only favorited characters
- Display the total number of favorites

### Stretch Goals (Optional)

These are not required but will strengthen your submission:

- Persist favorites to `localStorage`
- Debounce the name/species text inputs (300ms)
- Reflect filters and page in the URL
- Write unit tests for a component or custom hook
- Responsive design

## API Reference

| Endpoint | Description |
|----------|-------------|
| `GET /api/character` | List all characters (paginated, 20 per page) |
| `GET /api/character/?page=2` | Get a specific page |
| `GET /api/character/?name=rick&status=alive` | Filter characters |
| `GET /api/character/1` | Get a single character by ID |
| `GET /api/episode/1` | Get a single episode |
| `GET /api/episode/1,2,3` | Get multiple episodes at once |

Base URL: `https://rickandmortyapi.com/api`

Full documentation: https://rickandmortyapi.com/documentation

**Important API behavior**: When filters return no results, the API responds with `{ error: "There is nothing here" }` instead of an empty array. Your code should handle this.

## Deliverables

1. This repo with your implementation
2. Your answers to the questions below
3. Ensure `npm install && npm run build` succeeds without errors
4. Be prepared for a 15-30 minute walkthrough where we'll discuss your decisions and possibly make a small modification together

## Your Answers

Please fill these out before submitting.

**1. What trade-offs did you make and why?**

Your answer here

**2. If the character list had 10,000 items on one page, how would you keep the UI responsive?**

Your answer here

**3. If the API supported creating new characters (POST), how would you design the form and handle validation, optimistic updates, and error states?**

Your answer here

**4. What's one thing you'd add or refactor given another few hours?**

Your answer here

---

Good luck!
