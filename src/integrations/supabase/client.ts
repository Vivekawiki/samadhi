
// This file is maintained for backwards compatibility
// The application will now use a Laravel backend instead of Supabase

console.warn('Supabase functionality is deprecated. Please use the Laravel backend API instead.');

// Mock client for development purposes
export const supabase = {
  auth: {
    signUp: async () => ({ data: null, error: new Error('Supabase is no longer supported') }),
    signIn: async () => ({ data: null, error: new Error('Supabase is no longer supported') }),
    signOut: async () => ({ error: null })
  },
  from: () => ({
    select: () => ({
      eq: () => ({
        single: async () => ({ data: null, error: null }),
        data: null,
        error: null
      })
    }),
    insert: () => ({
      single: async () => ({ data: null, error: null }),
      data: null,
      error: null
    }),
    update: () => ({
      eq: () => ({
        single: async () => ({ data: null, error: null }),
        data: null,
        error: null
      })
    })
  })
};
