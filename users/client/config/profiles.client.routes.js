angular.module( 'profiles' ).config( [ '$routeProvider',
	function( $routeProvider ) {
		$routeProvider
		.when( '/profile', {
			templateUrl: 'users/client/views/home.client.view.html'
		} )
	}
] );