var app = angular.module( 'mba.Invitations' );

app.directive( 'mbaInvitationForm', function() {
	return {
		restrict: 'E',
		templateUrl: 'invitations/client/views/invitation-form.client.view.html',
		controller: 'mba.InvitationsController',
		controllerAs: 'inviteCtrl'
	};
} );
