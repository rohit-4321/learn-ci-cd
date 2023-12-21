import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello From type world. Hello world Learning Github actions....');
});

app.listen(port, () => {
    console.log(`Server running from docker. http://localhost:${port}/`);
});
