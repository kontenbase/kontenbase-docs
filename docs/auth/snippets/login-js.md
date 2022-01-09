const { user, error } = await kontenbase.auth.login({
  email: 'user@mail.com',
  password: 'password',
})