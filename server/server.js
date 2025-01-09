require('dotenv').config();
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const axios = require('axios');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(cors());
app.use(express.json());

const connections = new Map();

wss.on('connection', (ws) => {
    const requestId = Math.random().toString(36).substring(7);
    connections.set(requestId, ws);

    ws.on('close', () => {
        connections.delete(requestId);
    });

    ws.send(JSON.stringify({ type: 'requestId', requestId }));
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/chat', async (req, res) => {
    const { input_value, requestId } = req.body;
    const ws = connections.get(requestId);

    if (!ws) {
        return res.status(400).json({ error: 'WebSocket connection not found' });
    }

    try {
        const response = await axios.post(
            process.env.LANGFLOW_API_URL, 
            {
                input_value,
                output_type: 'chat',
                input_type: 'chat',
                "tweaks": {
                    "ChatInput-WEFUz": {},
                    "ParseData-RZU13": {},
                    "Prompt-lnsqU": {},
                    "SplitText-dNX7z": {},
                    "ChatOutput-IZPfR": {},
                    "AstraDB-cqAaG": {},
                    "AstraDB-EV6eT": {},
                    "File-XoYQb": {},
                    "GoogleGenerativeAIModel-YSdOh": {}
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.ASTRA_AUTH_TOKEN}`, // Using env variable for token
                }
            }
        );

        const message = response.data.outputs[0].outputs[0].results.message.text;

        ws.send(JSON.stringify({ type: 'response', message }));
        res.json({ status: 'Processing' });

    } catch (error) {
        ws.send(JSON.stringify({ type: 'error', message: error.message }));
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
