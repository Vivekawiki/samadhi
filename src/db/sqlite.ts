
// Browser-compatible SQLite implementation using sql.js
import initSqlJs from 'sql.js';

// Mock DB storage using localStorage
const DB_KEY = 'app_sqlite_db';

// Initialize the database with memory storage
let dbInstance = null;
let isInitialized = false;

// Load the DB from localStorage if available
const loadDbFromStorage = () => {
  try {
    const savedDb = localStorage.getItem(DB_KEY);
    return savedDb ? new Uint8Array(JSON.parse(savedDb)) : null;
  } catch (e) {
    console.error('Failed to load database from storage:', e);
    return null;
  }
};

// Save the DB to localStorage
const saveDbToStorage = (instance) => {
  try {
    if (instance) {
      const data = instance.export();
      const arr = Array.from(data);
      localStorage.setItem(DB_KEY, JSON.stringify(arr));
    }
  } catch (e) {
    console.error('Failed to save database to storage:', e);
  }
};

// Initialize the SQLite database
const initDb = async () => {
  if (isInitialized) return;

  try {
    // Initialize sql.js
    const SQL = await initSqlJs({
      locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
    });

    // Try to load existing database or create a new one
    const existingDb = loadDbFromStorage();
    dbInstance = existingDb ? new SQL.Database(existingDb) : new SQL.Database();

    // Create tables if they don't exist
    dbInstance.run(`
      CREATE TABLE IF NOT EXISTS profiles (
        id TEXT PRIMARY KEY,
        first_name TEXT,
        last_name TEXT,
        avatar_url TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    dbInstance.run(`
      CREATE TABLE IF NOT EXISTS user_roles (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        role TEXT NOT NULL CHECK(role IN ('admin', 'moderator', 'user')) DEFAULT 'user'
      )
    `);

    dbInstance.run(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    isInitialized = true;
    saveDbToStorage(dbInstance);
  } catch (error) {
    console.error('Failed to initialize SQLite database:', error);
  }
};

// Initialize the database
initDb();

// Create a prepare-like interface to mimic better-sqlite3
const prepare = (sql) => {
  return {
    run: (...params) => {
      try {
        dbInstance.run(sql, params);
        saveDbToStorage(dbInstance);
        return { changes: dbInstance.getRowsModified() };
      } catch (e) {
        console.error('SQL error in run:', e);
        throw e;
      }
    },
    get: (...params) => {
      try {
        const stmt = dbInstance.prepare(sql);
        stmt.bind(params);
        const result = stmt.step() ? stmt.getAsObject() : null;
        stmt.free();
        return result;
      } catch (e) {
        console.error('SQL error in get:', e);
        throw e;
      }
    },
    all: (...params) => {
      try {
        const stmt = dbInstance.prepare(sql);
        stmt.bind(params);
        const results = [];
        while (stmt.step()) {
          results.push(stmt.getAsObject());
        }
        stmt.free();
        return results;
      } catch (e) {
        console.error('SQL error in all:', e);
        throw e;
      }
    }
  };
};

// Export an API that mimics better-sqlite3
export const db = {
  prepare,
  exec: (sql) => {
    try {
      dbInstance.run(sql);
      saveDbToStorage(dbInstance);
    } catch (e) {
      console.error('SQL error in exec:', e);
      throw e;
    }
  }
};
