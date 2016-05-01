var roloDexter = angular.module('roloDexter', []);

roloDexter.controller('roloCtrl', function roloCtrl($scope) {
	$scope.contacts = [
	{
		"name": "Bart Simpson",
		"organization": "None",
		"email": "bart@simpson.bart",
		"mobile": "555-555-5555",
		"facebook": "bartsimpson",
		"twitter": "therealbart",
		"notes": "The sky is blue and Bart is yellow.",
		"photo": "photos/Bart_Simpson.jpg"
	},
	{
		"name": "Mark Vlatsmith",
		"organization": "Rolling Thunder Film School",
		"email": "mark@mkvlat.com",
		"mobile": "555-555-5555",
		"facebook": "markvlatsmith",
		"twitter": "besmartmark",
		"notes": "Best friends forever.",
		"photo": "photos/Mark_Vlatsmith.jpg"
	},
	{
		"name": "Johnny Sledgesickle",
		"organization": "Tasty Frozen Treats",
		"email": "john@tftreats.com",
		"mobile": "555-555-5555",
		"facebook": "thesledge",
		"twitter": "jbsledge",
		"notes": "Makes a great snowcone.",
		"photo": "photos/Johnny_Sledgesickle.jpg"
	},
	{
		"name": "Barbara Waltshizzler",
		"organization": "Nogokano Limited",
		"email": "barb@nogokanoltd.com",
		"mobile": "555-555-5555",
		"facebook": "waltshizz",
		"twitter": "candobarb",
		"notes": "Former nanny.  Plays rugby.",
		"photo": "photos/Barbara_Waltshizzler.jpg"
	}
	]
});