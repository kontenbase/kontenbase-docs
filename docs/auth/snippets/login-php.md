$res = $kontenbase->auth->login([
	'email' => 'user@mail.com',
	'password' => 'password'
]);

echo $res['user'];
echo $res['token'];