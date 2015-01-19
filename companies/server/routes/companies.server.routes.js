var companies = require( '../controllers/companies.server.controller' );

module.exports = function( app ) {
	app.route( '/api/company/:companyId' )
	.get( companies.read )
	.put( companies.update );
	
	app.param( 'companyId', companies.companyById );
};