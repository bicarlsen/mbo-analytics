var config = require( './config' ),
		mongoose = require( 'mongoose' ),
		autoIncrement = require( 'mongoose-auto-increment' );
		
module.exports = function() {
	var db = mongoose.connect( config.db );
	autoIncrement.initialize( db );
	
	require( '../../../invitations/server/models/invitation.server.model' );
	require( '../../../users/server/models/user.server.model' );
	require( '../../../companies/server/models/company.server.model' );
	
	return db;
};