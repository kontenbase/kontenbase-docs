// matches any of
$res = $kontenbase->service('posts')->find([
	'where' => [
		'name' => ['$in' => ['Ega', 'Radiegtya']]
	]
]);