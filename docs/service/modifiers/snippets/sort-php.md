// sort
// ascending: 1
// descending: -1
$res = $kontenbase->service('posts')->find([
	'sort' => ['name' => 1]
]);