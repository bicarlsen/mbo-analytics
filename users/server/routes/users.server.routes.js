var users = require( '../controllers/users.server.controller' );

module.exports = function( app ) {
	app.route( '/api/user/:userId' )
	.get( users.read )
	.put( users.update )
	.delete( users.delete );
	
	app.route( '/api/users' )
	.get( users.list );
	
	app.param( 'userId', users.userById );
}