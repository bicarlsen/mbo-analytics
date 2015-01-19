var mainApplicationModuleName = 'mboAnalytics';

var mainApplicationModule = angular.module( mainApplicationModuleName, 
	[ 'ngResource', 'ngRoute' ] );
	
// Configuration
mainApplicationModule.config( [ '$locationProvider',
	function( $locationProvider ) {
		$locationProvider.hashPrefix( '!' );
	} 
] );

angular.element( document ).ready( function() { 
	angular.bootstrap( document, [ mainApplicationModuleName ] );
} );
