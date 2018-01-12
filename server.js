const express = require('express'),
    bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

var astronauts = [{id: 0, firstName: "John", lastName: "Smith", isInSpace: true}];

var port = process.env.PORT || 8080;

app.get('/api/status', function(req, res) {
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

app.get('/api/astronauts', function(req, res) {
	res.send(astronauts);
});

app.post('/api/addAstronaut', function(req, res) {
	var toAdd = req.body; //senza id
	astronauts.push(toAdd);
	astronauts[astronauts.length - 1].id = astronauts.length - 1; //setto l'id
	res.send("");
});

app.put('/api/astronaut', function(req, res) {
	var id = req.body.id;
	for(var i = 0; i < astronauts.length; i++)
	{
		if(astronauts[i].id == id)
		{
			astronauts[i].firstName = req.body.firstName;
			astronauts[i].lastName = req.body.lastName;
			astronauts[i].isInSpace = req.body.isInSpace;
		}
	}
});

app.get('/api/astronaut', function(req, res) {
	var id = req.query.id;
	var found;
	for(var i = 0; i < astronauts.length; i++)
		if(astronauts[i].id == id)
			found = astronauts[i]
	if(found != null)
		res.send(found);
	else
		res.send("not found");
});

app.listen(port);

