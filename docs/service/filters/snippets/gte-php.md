$res = $kontenbase->service('posts')->find([
	'where' => [
		'total' => ['$gte' => 10]
	]
]);