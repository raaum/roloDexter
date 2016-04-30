var roloDexter = angular.module('roloDexter', []);

roloDexter.controller('roloCtrl', function roloCtlr($scope) {
	$scope.contact = {
		'name'     : "Greg Raaum",
		'company'  : "N/A",
		'phone'	   : "+1 (555) 232-1212",
		'email'    : "greg.raaum@yahoo.com",
		'notes'    : "Weird guy, likes baseball and reading strange AI books."
	}
});