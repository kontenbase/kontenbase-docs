$res = $kontenbase->service('posts')->create([
	'name' => 'Post 1',
	'notes' => 'Hello Kontenbase'
]);

echo $res['data'];