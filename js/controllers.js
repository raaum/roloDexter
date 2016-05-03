var roloDexter = angular.module('roloDexter', []);

roloDexter.controller('roloCtrl', ['$scope', '$http',
	function($scope, $http) {
		$scope.data = $http.get('json/contacts.json').success(function(data) {
			$scope.contacts = data;
		});
	}
]);