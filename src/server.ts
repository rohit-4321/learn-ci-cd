import express from 'express';

const app = express();
const port = 3000;
const asd ='Asdsad';
app.get('/', (req, res) => {
    res.send('Hello From type world. Learning Github actions....');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
