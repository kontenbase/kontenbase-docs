// more than or equals
$res = $kontenbase->service('posts')->find([
	'where' => [
		'total' => ['$gte' => 10]
	]
]);