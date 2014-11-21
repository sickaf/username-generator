module.exports = function(app) {

	// User API Methods

	app.get('/api/getUsername', function (req, res){			
		res.send(randomUsername());
	});

	function randomUsername() {
  		var nouns = ['fart','weed','poop','snowboard','longboarding','blaze','pussy','meat','slippery','dumb','heady','messy','drunk','blood','unintended','uncool', 'fartridden'];
  		var descriptors = ['fan','dude','man','doctor','expert','thug','hero','king','queen','idiot','queef','muscles','splatter','satan','worshipper', 'virgin', 'boy', 'girl','badbitch'];
  		var numbers = ['420','69'];
  		var noun = nouns[Math.floor(Math.random() * nouns.length)];
  		var descriptor = descriptors[Math.floor(Math.random() * descriptors.length)];
  		var number = numbers[Math.floor(Math.random() * numbers.length)];
  		return noun+descriptor+number;
	}

}

function handleError (err, res) {
	res.status(404);
	res.end(err);
}