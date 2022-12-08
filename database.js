import sqlite3 from 'better-sqlite3';

const db = new sqlite3('data.db');

const stmt = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='accesslog';`)
let row = stmt.get();

if (row === undefined){
    console.log('Database appears to be empty.')

    const sqlInit = `
        CREATE TABLE accesslog (
            id INTERGER PRIMARY KEY,
            address TEXT,
            user TEXT,
            time TEXT,
            method TEXT,
            url TEXT,
            protocol TEXT,
            version TEXT,
            status TEXT,
            referrer TEXT,
            agent TEXT
        );

    `
    db.exec(sqlInit)
} else {
    console.log('Log database is already exist')
}

module.export = db