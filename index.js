var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('port', port);

require('./routes/routes.js')(app); // pass in app and passport
require('./routes/api/api.js')(app);

app.use(express.static(__dirname + '/public'));

// app.get('/', function(request, response) {
// response.send('<h1>Hey whats up! your username is '+randomUsername()+'! :)</h1>');
// })

app.listen(port, function() {
 console.log('Server listening at port %d', port);
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
 var err = new Error('Not Found');
 err.status = 404;
 next(err);
});


// var express = require('express')
// var app = express();

// app.set('port', (process.env.PORT || 3000))
// app.use(express.static(__dirname + '/public'))

// app.get('/', function(request, response) {
//   response.send('<h1>Hey whats up! your username is '+randomUsername()+'! :)</h1>');
// })

// app.listen(app.get('port'), function() {
//   console.log("Node app is running at localhost:" + app.get('port'))
// })

// function randomUsername() {
//   var nouns = ['fart','weed','poop','snowboard','longboarding','blaze','pussy','meat','slippery','dumb','heady','messy','drunk','blood','unintended','uncool', 'fartridden'];
//   var descriptors = ['fan','dude','man','doctor','expert','thug','hero','king','queen','idiot','queef','muscles','splatter','satan','worshipper', 'virgin', 'boy', 'girl','badbitch'];
//   var numbers = ['420','69'];
//   var noun = nouns[Math.floor(Math.random() * nouns.length)];
//   var descriptor = descriptors[Math.floor(Math.random() * descriptors.length)];
//   var number = numbers[Math.floor(Math.random() * numbers.length)];
//   return noun+descriptor+number;
// }

