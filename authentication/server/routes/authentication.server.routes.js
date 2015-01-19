var authenticate = require( '../controllers/authentication.server.controller' ),
		passport = require( 'passport' );

module.exports = function( app ) {
	app.route( '/signup' )
	.get( authenticate.renderSignup )
	.post( authenticate.signup );
	
	app.route( '/signin' )
	.get( authenticate.renderSignin )
	.post( passport.authenticate( 'local', {
		successRedirect: '/',
		failureRedirect: '/signin',
		failureFlash: true
	} ) );
	
	app.get( '/signout', authenticate.signout );
}