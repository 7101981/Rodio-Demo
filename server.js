var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('client/build'));

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log('Example app');
});