const express = require('express');
const { Client, LocalAuth } = require('whatsapp-web.js');

const app = express();
const port = 3000;

// Create a new WhatsApp client
const client = new Client({
    authStrategy: new LocalAuth()
});

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


client.on('qr', (qr) => {
    console.log('Qr is ready!',qr);
});

app.get("/", (req, res) => {
    res.send("trst");
});

client.on('ready', () => {
    console.log('WhatsApp client is ready!');
});

client.initialize();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
