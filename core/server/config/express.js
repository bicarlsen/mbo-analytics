var config = require( './config' ),
		express = require( 'express' ),
		ejsLayouts = require( 'express-ejs-layouts' ),
		morgan = require( 'morgan' ),
		compress = require( 'compression' ),
		bodyParser = require( 'body-parser' ),
		methodOverride = require( 'method-override' ),
		session = require( 'express-session' ),
		flash = require( 'connect-flash' ),
		passport = require( 'passport' );

module.exports = function() {
	var app = express();
	
	if ( process.env.NODE_ENV === 'development' ) {
		app.use( morgan( 'dev' ) );
	}
	else if ( process.env.NODE_ENV === 'production' ) {
		app.use( compress() );
	}
	
	app.use( ejsLayouts );
	app.use( bodyParser.urlencoded( { extended: true } ) );
	app.use( bodyParser.json() );
	app.use( methodOverride() );
	
	app.use( session( {
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret
	} ) );
	
	app.set( 'views', 
	[
		'./core/server/views',
		'./authentication/server/views',
		'./home/server/views',
		'./users/server/views'
	]	);
	app.set( 'view engine', 'ejs' );
	app.set( 'layout', 'layout' );
	app.set( 'layout extractScripts', true );
	
	app.use( flash() );
	app.use( passport.initialize() );
	app.use( passport.session() );
	
	require( '../../../home/server/routes/home.server.routes.js' )( app );
	require( '../../../invitations/server/routes/invitations.server.routes.js' )( app );
	require( '../../../authentication/server/routes/authentication.server.routes.js' )( app );
	require( '../../../users/server/routes/users.server.routes.js' )( app );
	require( '../../../users/server/routes/profiles.server.routes.js' )( app );
	require( '../../../companies/server/routes/companies.server.routes.js' )( app );
	
	app.use( express.static( '.' ) ); // TODO: Change so compliant with feature structure
	
	return app
}