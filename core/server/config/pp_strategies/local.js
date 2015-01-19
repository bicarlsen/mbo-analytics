var passport = require( 'passport' ),
		LocalStrategy = require( 'passport-local' ).Strategy,
		User = require( 'mongoose' ).model( 'User' );
		
module.exports = function() {
	passport.use( new LocalStrategy( function( username, password, done ) {
		User.findOne( { email: username }, 
			function( err, user ) {
				if ( err ) { // Error on retrieval
					return done( err );
				}
				
				if ( !user ) { // No user found
					return done( null, false, { message: 'Invalid Email or Password' } );
				}
				
				if ( !user.authenticate( password ) ) { // Could not authenticate
					return done( null, false, { message: 'Invalid Email or Password' } );
				}
				
				// All Good
				return done( null, user );
		} );
	} ) );
};