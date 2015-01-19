var Invitation = require( 'mongoose' ).model( 'Invitation' );

// Create
exports.create = function( req, res, next ) {
	var invite = new Invitation( req.body );
	invite.save( function( err ) {
		if ( err ) {
			return next( err );
		}
		
		res.json( invite );
	} );
};