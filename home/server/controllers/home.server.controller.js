exports.render = function( req, res ) {
	res.render( 'index', {
		ngApp: 'mba.Invitations'
	} );
};