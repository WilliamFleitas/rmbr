// import path from 'path';
// import fs from 'fs';
// import { app } from 'electron';
// import sqlite3 from 'sqlite3';

// // Function to initialize the database
// export function initializeDatabase(): sqlite3.Database {
//   // Ensure app is ready before accessing app.getPath
//   console.log("entro1")
//   const dbPath = path.join(app.getPath('userData'), 'app32.db');
//   console.log("entro12")
//   // Check if the database file exists; create an empty one if it doesn't
//   if (!fs.existsSync(dbPath)) {
//     console.log('Database file does not exist. Creating one at:', dbPath);
//     fs.writeFileSync(dbPath, ''); // Create an empty database file
//   }

//   // Create the SQLite database connection
//   const db = new sqlite3.Database(dbPath, (err) => {
//     console.log("entro133")
//     if (err) {
//       console.error('Error connecting to SQLite:', err.message);
//     } else {
//       console.log('Connected to SQLite at:', dbPath);
//     }
//   });

//   // Ensure the "users" table exists
//   db.serialize(() => {
//     db.run(
//       `
//       CREATE TABLE IF NOT EXISTS users (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT NOT NULL,
//         password TEXT NOT NULL
//       )
//       `,
//       (err) => {
//         if (err) {
//           console.error('Error creating the "users" table:', err.message);
//         } else {
//           console.log('"users" table created or already exists.');
//         }
//       }
//     );
//   });

//   return db;
// }