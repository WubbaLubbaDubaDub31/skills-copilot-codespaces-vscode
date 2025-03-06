//Creat web server
const express = require('express');
const app = express();
const port = 3000;
//Create a route that listens to the root of the server
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//Create a route that listens to the /comments path of the server
app.get('/comments', (req, res) => {
    res.send('This is the comments path');
});
//Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});