// server.js

const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

// Use CORS middleware
app.use(cors()); // This will enable CORS for all origins
app.use(express.json());

// Routes
app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    try {
        const newUser = await prisma.user.create({
            data: { name, email }
        });
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
