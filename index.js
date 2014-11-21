var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('<h1>Hey whats up! your username is '+randomUsername()+'! :)</h1>');
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

function randomUsername() {
  var nouns = ['fart','weed','poop','snowboard','longboarding','blaze','pussy','meat','slippery','dumb','heady','messy','drunk','blood'];
  var descriptors = ['fan','dude','man','doctor','expert','thug','hero','king','queen','idiot','queef','muscles','splatter','satan','worshipper', 'virgin'];
  var numbers = ['420','69'];
  var noun = nouns[Math.floor(Math.random() * nouns.length)];
  var descriptor = descriptors[Math.floor(Math.random() * descriptors.length)];
  var number = numbers[Math.floor(Math.random() * numbers.length)];
  return noun+descriptor+number;
}

