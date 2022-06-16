// does not contain
$res = $kontenbase->service('posts')->find([
	'where' => [
		'notes' => ['$notContains' => 'hello']
	]
]);