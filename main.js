const express = require('express');
const app = express();
const PORT = 3000;
const apiRoute = require('./routes/routes.js');

app.use('/api', apiRoute);

app.get('/', (req, res) => {
    res.json({ message: 'Server is up and running 🎉🎉🎉' });
})

app.listen(PORT, () => {
    console.log(`Server is up and running 🎉 on port http://localhost:${PORT}`);
})