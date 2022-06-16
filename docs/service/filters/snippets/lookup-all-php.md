// lookup all fields
$res = $kontenbase->service('posts')->find([
	'lookup' => '*'
]);