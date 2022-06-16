$res = $kontenbase->service('posts')->find([
	'where' => [
		'name' => ['$nin' => ['Ega', 'Radiegtya']]
	]
]);