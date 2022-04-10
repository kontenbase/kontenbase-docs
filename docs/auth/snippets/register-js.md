const { user, token, error } = await kontenbase.auth.register({
  firstName: 'Ega',
  lastName: 'Radiegtya',
  email: 'user@mail.com',
  password: 'password',
})
