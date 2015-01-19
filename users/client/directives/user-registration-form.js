angular.module( 'users' ).directive( 'userRegistrationForm', function() {
	return {
		restrict: 'E',
		templateUrl: '../views/user-registration-form.html'
	}
} );