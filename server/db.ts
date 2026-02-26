import sqlite3 from 'better-sqlite3';
import path from 'path';

const db = new sqlite3('kls.db');

// Enable foreign keys
db.pragma('foreign_keys = ON');

/**
 * DATABASE SCHEMA LOGIC
 * 
 * Hierarchy:
 * 1. Platforms (Global)
 * 2. Institutions (Colleges/Universities)
 * 3. Departments (Within Institutions)
 * 4. Classes/Batches (Within Departments)
 * 5. Users (Students, Faculty, Admins)
 * 6. Projects (Circuit, Code, IoT, Robotics)
 */

export function initDb() {
  // Institutions Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS institutions (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      domain TEXT UNIQUE,
      license_type TEXT DEFAULT 'trial',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Departments Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS departments (
      id TEXT PRIMARY KEY,
      institution_id TEXT NOT NULL,
      name TEXT NOT NULL,
      head_of_dept TEXT,
      FOREIGN KEY (institution_id) REFERENCES institutions(id) ON DELETE CASCADE
    )
  `);

  // Users Table (Role-based)
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      institution_id TEXT NOT NULL,
      department_id TEXT,
      email TEXT UNIQUE NOT NULL,
      full_name TEXT NOT NULL,
      role TEXT CHECK(role IN ('super_admin', 'college_admin', 'faculty', 'student')) NOT NULL,
      password_hash TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (institution_id) REFERENCES institutions(id) ON DELETE CASCADE,
      FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
    )
  `);

  // Classes/Batches Table (Within Departments)
  db.exec(`
    CREATE TABLE IF NOT EXISTS batches (
      id TEXT PRIMARY KEY,
      department_id TEXT NOT NULL,
      faculty_id TEXT NOT NULL,
      name TEXT NOT NULL,
      academic_year TEXT NOT NULL,
      FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE,
      FOREIGN KEY (faculty_id) REFERENCES users(id) ON DELETE SET NULL
    )
  `);

  // Enrollment Table (Students in Batches)
  db.exec(`
    CREATE TABLE IF NOT EXISTS enrollments (
      user_id TEXT NOT NULL,
      batch_id TEXT NOT NULL,
      PRIMARY KEY (user_id, batch_id),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (batch_id) REFERENCES batches(id) ON DELETE CASCADE
    )
  `);

  // Attendance Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS attendance (
      id TEXT PRIMARY KEY,
      batch_id TEXT NOT NULL,
      user_id TEXT NOT NULL,
      date DATE NOT NULL,
      status TEXT CHECK(status IN ('present', 'absent', 'late')) NOT NULL,
      FOREIGN KEY (batch_id) REFERENCES batches(id) ON DELETE CASCADE,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);

  // Progress Table
  db.exec(`
    CREATE TABLE IF NOT EXISTS progress (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      lab_id TEXT NOT NULL,
      status TEXT CHECK(status IN ('not_started', 'in_progress', 'submitted', 'graded')) DEFAULT 'not_started',
      score REAL,
      feedback TEXT,
      last_updated DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (lab_id) REFERENCES labs(id) ON DELETE CASCADE
    )
  `);

  // Labs Table (Templates/Assignments)
  db.exec(`
    CREATE TABLE IF NOT EXISTS labs (
      id TEXT PRIMARY KEY,
      department_id TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      lab_type TEXT CHECK(lab_type IN ('simulator', 'code', 'iot', 'robotics')) NOT NULL,
      config_json TEXT,
      FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE
    )
  `);

  // Projects Table (User Work)
  db.exec(`
    CREATE TABLE IF NOT EXISTS projects (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      lab_id TEXT,
      title TEXT NOT NULL,
      data_json TEXT, -- Stores circuit design, code, etc.
      last_modified DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (lab_id) REFERENCES labs(id) ON DELETE SET NULL
    )
  `);

  console.log('Database initialized successfully.');
}

export default db;
