var User = require( 'mongoose' ).model( 'User' ),
		Company = require( 'mongoose' ).model( 'Company' ),
		passport = require( 'passport' );

// Helper	
var getErrorMessage = function( err ) {
	var message = '';
	
	if ( err.code ) {
		switch ( err.code ) {
			case 11000:
			case 11001:
				message = 'Email is already registered';
				break;
			default:
				message = 'Something went wrong';
		}
	}
	else {
		for( var errName in err.errors ) {
			if ( err.errors[errName].message ) {
				message = err.errors[errName].message
			}
		}
	}
	
	return message;
};
		
// Renderers
exports.renderSignin = function( req, res, next ) {
	if ( !req.user ) {
		res.render( 'signin', {
			title: 'Sign In',
			layout: 'layout-bare',
			messages: req.flash( 'error' ) || req.flash( 'info' )
		} );
	}
	else { // User already set
		return res.redirect( '/' );
	}
};

exports.renderSignup = function( req, res, next ) {
	if ( !req.user ) {
		res.render( 'signup', {
			title: 'Sign Up',
			user: false,
			layout: 'layout',
			messages: req.flash( 'error' )
		} );
	}
	else { // User already set
		return res.redirect( '/' );
	}
};

// Sign Up / In / Out
exports.signup = function( req, res, next ) {

	if ( !req.user ) {
		var company = new Company( { mboId: req.body.mboId } );
		var message = null;

		company.save( function( err ) { 
			if ( err ) {
				var message = getErrorMessage( err );
				req.flash( 'error', message );
				return res.redirect( '/signup' );
			}
			
			var user = new User( req.body );
			user.company = company;
			
			user.save( function( err ) { 
				if ( err ) {
					var message = getErrorMessage( err );
					req.flash( 'error', message );
					return res.redirect( '/signup' );
				}
		
				// User successfully saved
				req.login( user, function( err ) {
					if ( err ) {
						return next( err );
					}
					
					// User succefully Logged In
					return res.redirect( '/profile' );
				} );
			} );
		} );
	}
	else { // User already signed in
		return res.redirect( '/' );
	}
};

exports.signout = function( req, res ) {
	req.logout();
	res.redirect( '/' );
}