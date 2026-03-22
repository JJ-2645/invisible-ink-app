const express = require('express');
const cors = require('cors');
const path = require('path');
// const mongoose = require('mongoose'); // Uncomment when ready for a real database

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows the server to understand JSON data

// Serve the frontend UI
app.use(express.static(path.join(__dirname, 'public')));

// --- DATABASE SIMULATION (The Audit Log) ---
// For this prototype, we will use an array stored in memory. 
// For your final submission, you can easily swap this out for MongoDB.
const auditLogDatabase = [];

// --- API ROUTES ---

// 1. Route to log a new steganography event
app.post('/api/audit', (req, res) => {
    const { action, filename, timestamp } = req.body;

    // Create a new log entry
    const newLog = {
        id: Math.random().toString(36).substr(2, 9),
        action: action, // 'ENCODE' or 'DECODE'
        filename: filename || 'Unknown Asset',
        ipAddress: req.ip || '127.0.0.1',
        timestamp: timestamp || new Date().toISOString()
    };

    // Save to our "database"
    auditLogDatabase.push(newLog);

    console.log(`[AUDIT] Action logged: ${action} on ${newLog.filename}`);
    res.status(201).json({ message: "Audit log recorded successfully", log: newLog });
});

// 2. Route to view the logs (Your mentor will love this endpoint)
app.get('/api/audit/logs', (req, res) => {
    res.status(200).json(auditLogDatabase);
});

// Start the server
app.listen(PORT, () => {
    console.log(`===========================================`);
    console.log(`🚀 INVISIBLE INK SERVER ONLINE`);
    console.log(`🌐 Application running at: http://localhost:${PORT}`);
    console.log(`===========================================`);
});