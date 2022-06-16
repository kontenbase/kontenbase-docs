// select
$res = $kontenbase->service('posts')->find([
	'select' => ['name', 'notes']
]);