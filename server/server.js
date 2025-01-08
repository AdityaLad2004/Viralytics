
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
            'https://api.langflow.astra.datastax.com/lf/2883a420-6c59-43c7-a840-f0649786eafc/api/v1/run/2f5ac0cc-55db-4fd9-a94d-4347c732477d?stream=false',
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
                    'Authorization': 'Bearer AstraCS:WxmOPJlzrQjdftMHtuuoxkbh:c22d5ae904338c6c04aed2273e2c8855bad821187c30dcd9bdb2564981986a56'
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

