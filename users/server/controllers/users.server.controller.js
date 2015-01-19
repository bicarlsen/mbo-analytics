var User = require( 'mongoose' ).model( 'User' );

// Create
exports.create = function( req, res, next ) {
	var user = new User( req.body );
	user.save( function( err ) {
		if ( err ) {
			return next(err);
		}
		
		res.json( user );
	} );
};

// Read
exports.list = function( req, res, next ) {
	User.find( {}, function( err, users ) {
		if ( err ) {
			return next( err );
		}
		else {
			res.json( users );
		}
	} );
};

exports.read = function( req, res ) {
	res.json( req.user );
};

// Update
exports.update = function( req, res, next ) {
	User.findByIdAndUpdate( req.user.id, req.body, function( err, user ) {
		if ( err ) {
			return next( err );
		}
			
		res.json( user );	
	} );
};

// Destroy
exports.delete = function( req, res, next ) {
	req.user.remove( function( err ) {
		if ( err ) {
			return next( err );
		}
		
		res.json( req.user );
	} );
};

// Helpers
/* Sets req.user to a User by its ID */
exports.userById = function( req, res, next, id ) {
	User.findOne( { _id: id }, function( err, user ) { 
		if ( err ) {
			return next( err );
		}
		
		req.user = user;
		next();
	} );
};

