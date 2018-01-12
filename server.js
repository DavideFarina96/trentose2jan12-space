const express = require('express'),
    bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

var astronauts = [{id: 0, firstName: "John", lastName: "Smith", isInSpace: true}];

var port = process.env.PORT || 8080;

app.get('/status', function(req, res) {
	var id = req.query.id;
	var found;
	for(var i = 0; i < astronauts.length; i++)
		if(astronauts[i].id == id)
			found = astronauts[i]
	if(found != null)
		res.send(found.isInSpace);
	else
		res.send("not found");
});

app.get('/astronauts', function(req, res) {
	res.send(astronauts);
});

app.post('/addAstronaut', function(req, res) {
	var toAdd = req.body; //senza id
	astronauts.push(toAdd);
	astronauts[astronauts.length - 1].id = astronauts.length - 1; //setto l'id
	res.send("");
});

app.listen(port);

