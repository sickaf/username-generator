var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.set('port', port);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	// res.render('index');
	res.send('HIIIIIIIIIII whats up.  Cody, replace this with rendering the front end.');
});

require('./routes/api/api.js')(app);

app.listen(port, function() {
 console.log('Server listening at port %d', port);
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
 var err = new Error('Not Found');
 err.status = 404;
 next(err);
});
