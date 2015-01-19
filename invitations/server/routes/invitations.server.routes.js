var invitations = require( '../controllers/invitations.server.controller.js' );

module.exports = function( app ) {
	app.route( '/api/invitation' )
	.post( invitations.create );
};