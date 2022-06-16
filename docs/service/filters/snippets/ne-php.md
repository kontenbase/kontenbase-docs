// does not equal
$res = $kontenbase->service('posts')->find([
	'where' => [
		'name' => ['$ne' => 'Ega']
	]
]);