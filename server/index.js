const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/pens', (req, res) => {
	res.send('Lots and lots of pens!');
});

app.listen(8082, function() {
	console.log('Server running on port 8082!');
});
