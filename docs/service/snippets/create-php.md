$res = $kontenbase->service('posts')->create([
	'name' => 'Post 1',
	'notes' => 'Hello Kontenbase'
]);

echo $res['data'] // The data of the new record