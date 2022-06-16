// lookup but only show ids
$res = $kontenbase->service('posts')->find([
	'lookup' => ['_id' => '*']
]);