// =======================
// get the packages we need ============
// =======================
var express    		= require('express');
var app         	= express();
var bodyParser  	= require('body-parser');
var morgan      	= require('morgan');
var mongoose    	= require('mongoose');
var stormpath 		= require('express-stormpath');

var jwt    			= require('jsonwebtoken'); // used to create, sign, and verify tokens
var config 			= require('./config'); // get our config file
var characterModel	= require('./app/models/character'); // get our mongoose character model
    
// =======================
// configuration =========
// =======================

var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// =======================
// routes ================
// =======================
// basic route

app.get('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

// API ROUTES -------------------
app.use(stormpath.init(app, { }));

var apiRoutes = express.Router(); 

apiRoutes.get('/', stormpath.loginRequired, function(req,res) {
	res.send('Yup, API');
});

apiRoutes.get('/main', stormpath.loginRequired, function(req,res) {
	if req.user.customData.characterID {
		
	}

	else { // Character Creation
		
	}
});

// apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);

// =======================
// start the server ======
// =======================
app.on('stormpath.ready', function() {
  app.listen(port);
  console.log('Crucible happening at http://localhost:' + port);
});