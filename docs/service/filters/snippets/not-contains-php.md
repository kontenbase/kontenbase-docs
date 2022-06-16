$res = $kontenbase->service('posts')->find([
	'where' => [
		'notes' => ['$notContains' => 'hello']
	]
]);