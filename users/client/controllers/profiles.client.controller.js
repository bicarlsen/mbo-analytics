angular.module( 'profiles' ).controller( 'ProfilesController' , [ 
		'$scope', '$resource',
		function( $scope, $resource ) {
			var Profile = $resource( '/api/profile' );
			var Company = $resource( '/api/company/:companyId' );
			
			// Initialize Scope
			$scope.user = {};
			$scope.company = {};
			$scope.temp = {};
			$scope.activeForms = {
				user: false,
				company: false,
				account: false
			};
			
			Profile.get( function( result ) { // get user
				$scope.user = result;
				$scope.temp.user = angular.copy( $scope.user );
				
				Company.get( // get user's company
					{ companyId: $scope.user.company },
					function( result ) {
						$scope.company = result;
						$scope.temp.company = angular.copy( $scope.company );
					}
				);
			} );
			
			// Update
			$scope.user.update = function() {
				$scope.user = angular.copy( $scope.temp.user );
				$scope.user.$update( function() {
				} );
				
				$scope.activeForms.user = false;
			};
			
			$scope.updateCompany = function() {
				Profile.save( $scope.company );
				$scope.user = angular.copy( $scope.temp.user );
				$scope.activeForms.user = false;
			};
			
			// Reset
			$scope.resetUser = function() {
				$scope.temp.user = $scope.user;
			};
			
			$scope.resetCompany = function() {
				$scope.temp.company = $scope.company;
			};
			
			// Cancel updates
			$scope.cancel = function( form ) {
				switch( form ) {
					case 'user':
						$scope.resetUser();
						$scope.activeForms.user = false;
						break;
					case 'company':
						$scope.resetCompany();
						$scope.activeForms.company = false;
						break;
				}
			}
		}
] );