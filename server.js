process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var coreConfigPath = './core/server/config'

var mongoose = require( coreConfigPath + '/mongoose' ),
		express = require( coreConfigPath + '/express' ),
		passport = require( coreConfigPath + '/passport' );

var db = mongoose();
var app = express();
var passport = passport();

app.listen( 3000 );
module.exports = app;

console.log( 'Server running...' )