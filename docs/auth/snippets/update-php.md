$res = $kontenbase->auth->update([
	'firstName' => 'Ega'
]);

echo $res['user'];