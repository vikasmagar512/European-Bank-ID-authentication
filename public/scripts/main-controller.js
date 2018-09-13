'use strict';

angular.module('app').controller('mainController', function ($scope, $log, $http) {
		$scope.data = {
			pno: undefined,
			status: 'Not authenticated.'
		};

		$scope.authenticate = function () {
			$http.post('/api/authenticate', {pno: $scope.data.pno}).then(
				function (res) {
					if(res.data.success) {
						$scope.data.status = 'Successfully authenticated.';
					}
				},
				function (err) {
					$log.info(err);
				}
			);
		};
	});