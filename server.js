const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get('/', (req, res) => {
	res.send("getting root");
});

app.get('/profile', (req, res) => {
	res.send('getting profile');
});

app.post('/profile', (req, res) => {
	console.log(req.body)
	res.send('Success');
});

app.listen(3000);
