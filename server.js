const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Login API ကို ပြင်ဆင်ထားပါတယ်
app.post('/login', (req, res) => {
    const { username } = req.body;
    res.json({ 
        success: true, 
        message: `Welcome ${username}!`,
        balance: 1000.00  // အစမ်းသုံးဖို့ ပိုက်ဆံ $1000 ထည့်ပေးလိုက်ပါမယ်
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});