var app = require( '../../../server' ),
		request = require( 'supertest' ),
		should = require( 'should' );
		
describe( 'Home Controller Unit Tests:', function() {
	describe( 'Testing the GET methods', function() {
		it( 'Should return the home page', function() {
			request( app ).get( '/' )
			.expect( 200 ).
			end( function( err, res ) {
				res.body.should.be.html;
				res.body.should.match( /<a .+>Sign Up<\/a>/ ); // Check for some content on the home page
			} );
		} );
	} );
} );