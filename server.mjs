// server.js
import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors());

const clients = [];

// Function to send a message to all clients
function sendSSE(data) {
    console.log('sending event to all clients: ', data);
    clients.forEach((client) => {
        client.write(`data: ${JSON.stringify(data)}\n\n`);
    });
}

app.get('/events', (req, res) => {
    // Set headers for SSE
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Add this client to the list
    clients.push(res);

    // Remove client when connection closes
    req.on('close', () => {
        clients.splice(clients.indexOf(res), 1);
        res.end();
    });
});

// Send an event every 5 seconds
setInterval(() => {
    const message = {
        time: new Date().toLocaleTimeString(),
        data: {
            some: "json data"
        }
    };
    sendSSE(message);
}, 1000);

app.use(express.static('public')); // Serve static client HTML
app.listen(3000, () => {
    console.log('SSE server running on http://localhost:3000');
});
