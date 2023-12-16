import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello From type world. Learning Github actions....asdsd');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
