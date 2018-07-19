const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
app.use(bodyParser.json());

app.get('/pens', cors(corsOptions), (req, res) => {
	res.send('Lots and lots of pens!');
});

app.listen(8082, function() {
	console.log('Server running on port 8082!');
});
