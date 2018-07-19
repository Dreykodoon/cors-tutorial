const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
	origin: 'http://localhost:3000',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
app.use(bodyParser.json());
app.options('/preflight', cors(corsOptions)); // enable pre-flight request for route '/preflight'

app.get('/simple', cors(corsOptions), (req, res) => {
	res.send('Response to simple request');
});

app.post('/preflight', cors(corsOptions), (req, res) => {
	console.log(req.header('TEST_HEADER'));
	res.send('Response with preflight');
});

app.listen(8082, function() {
	console.log('Server running on port 8082!');
});
