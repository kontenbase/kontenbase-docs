// contains
$res = $kontenbase->service('posts')->find([
	'where' => [
		'notes' => ['$contains' => 'hello']
	]
]);