angular.module( 'mba.Invitations' ).controller( 'mba.InvitationsController', [
	'$scope', '$resource',
	function( $scope, $resource ) {
		var Invitation = $resource( '/api/invitation' );
		$scope.email = '';
		this.thankyou = false;
		this.error = { type: '', message: '' }
			
		_this = this;
		this.submit = function( email ) {
			var invite = Invitation.save( 
				{ email: $scope.email }, 
				function( res ) {
					$scope.email = '';
					_this.email = invite.email;
					_this.thankyou = true;
				},
				function( err ) {
					if ( err.data.indexOf( 'E11000' ) > -1 ) {
						_this.error = {
							type: 'has-warning',
							message: 'Ooops... That email has already requested an invitation'
						}
					}
				}
			); 
		}
	}
] );