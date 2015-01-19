var User = require( 'mongoose' ).model( 'User' );

// Read
exports.read = function( req, res ) {
	res.json( req.user );
};

// Update
exports.update = function( req, res ) {
	User.findByIdAndUpdate( req.user.id, req.body, function( err, user ) {
		if ( err ) {
			return next( err );
		}
			
		res.json( user );	
	} );
};

// Render
exports.render = function( req, res ) {
	if ( !req.user ) { // User not authenticated
		res.redirect( '/' );
	}
	
	res.render( 'profile', {
		title: 'Profile',
		user: req.user
	} );
};

// Helpers