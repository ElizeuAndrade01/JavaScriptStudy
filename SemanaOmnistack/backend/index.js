const express = require('express');

const app = express();

app.get('/', (request, response) =>{
    return response.json({ message: 'Hello Sushitrash' });
});

app.listen(7777);