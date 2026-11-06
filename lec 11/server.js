const express = require('express');
const app = express();

app.use(express.json());

app.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.send('Hello World!');
});

app.get('/', (req, res) => {
    console.log();
    
    res.send('Hello World from  / route');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});