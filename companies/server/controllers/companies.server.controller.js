var Company = require( 'mongoose' ).model( 'Company' );

// Create
exports.create = function() {

};

// Read
exports.read = function( req, res ) {
	res.json( req.company );
};

// Update
exports.update = function( req, res ) {

}

// Delete

// Helpers
exports.companyById = function( req, res, next, id ) {
	Company.findOne( { _id: id }, function( err, company ) { 
		if ( err ) {
			return next( err );
		}
		
		req.company = company;
		next();
	} );
};