$res = $kontenbase->auth->login([
	'email' => 'user@mail.com',
	'password' => 'password'
]);

echo $res['user']; // The data of logged-in user
echo $res['token']; // The token of logged-in user