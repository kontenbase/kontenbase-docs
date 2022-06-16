$res = $kontenbase->service('posts')->find([
	'where' => [
		'total' => ['$lte' => 10]
	]
]);