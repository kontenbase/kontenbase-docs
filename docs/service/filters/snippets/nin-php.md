// does not match any of
$res = $kontenbase->service('posts')->find([
	'where' => [
		'name' => ['$nin' => ['Ega', 'Radiegtya']]
	]
]);