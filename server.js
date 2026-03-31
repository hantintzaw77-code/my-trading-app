const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let users = {};

app.post('/login', (req, res) => {
    const { username } = req.body;
    if (!users[username]) {
        users[username] = { balance: 100.00 };
    }
    res.json({ success: true, balance: users[username].balance });
});

app.post('/deposit', (req, res) => {
    const { username } = req.body;
    if (users[username]) {
        users[username].balance += 50.0;
        res.json({ success: true, newBalance: users[username].balance });
    }
});

// ဒီအပိုင်းကို Online တင်လို့ရအောင် ကျွန်တော် ပြင်ပေးထားပြီးသားပါ
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});