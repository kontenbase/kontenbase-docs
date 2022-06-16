// more than
$res = $kontenbase->service('posts')->find([
	'where' => [
		'total' => ['$gt' => 10]
	]
]);