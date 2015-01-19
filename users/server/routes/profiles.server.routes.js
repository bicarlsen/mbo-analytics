var profile = require( '../../server/controllers/profiles.server.controller' );

module.exports = function( app ) {	
	app.route( '/profile' )
	.get( profile.render );
	
	app.route( '/api/profile' )
	.get( profile.read )
	.post( profile.update );
}