const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware - JSON ဖတ်ဖို့နဲ့ static ဖိုင် (HTML, CSS) တွေပြဖို့
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Website ကို စဖွင့်တာနဲ့ index.html ပြခိုင်းတာ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Login စမ်းသပ်ဖို့ API (ဒါက နောက်မှ အသေးစိတ်ရေးမယ်)
app.post('/login', (req, res) => {
    const { username } = req.body;
    res.json({ message: `Welcome ${username}!` });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});