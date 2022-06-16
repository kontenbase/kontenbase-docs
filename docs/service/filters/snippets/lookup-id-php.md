$res = $kontenbase->service('posts')->find([
	'lookup' => ['_id' => '*']
]);