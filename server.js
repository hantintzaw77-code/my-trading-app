const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', (req, res) => {
    const { username } = req.body;
    res.json({ success: true, balance: 1000.00 });
});

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });