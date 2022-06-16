// less than
$res = $kontenbase->service('posts')->find([
	'where' => [
		'total' => ['$lt' => 10]
	]
]);