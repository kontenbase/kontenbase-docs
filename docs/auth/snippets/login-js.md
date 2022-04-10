const { user, token, error } = await kontenbase.auth.login({
  email: 'user@mail.com',
  password: 'password',
})