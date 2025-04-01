
// This file is maintained for backwards compatibility
// The application will now use a Laravel backend instead of SQLite or Supabase

console.warn('SQLite functionality is deprecated. Please use the Laravel backend API instead.');

// Mock DB for development purposes
const mockDb = {
  prepare: () => ({
    run: () => ({ changes: 0 }),
    get: () => null,
    all: () => []
  }),
  exec: () => {}
};

export const db = mockDb;
