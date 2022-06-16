// lookup spesific fields
$res = $kontenbase->service('posts')->find([
	'lookup' => ['categories']
]);