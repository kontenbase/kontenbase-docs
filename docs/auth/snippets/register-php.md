$res = $kontenbase->auth->register([
	'firstName' => 'Ega',
	'lastName' => 'Radiegtya',
	'email' => 'user@mail.com',
	'password' => 'password'
]);

echo $res['user']; // The data of registered user
echo $res['token']; // The token of registered user