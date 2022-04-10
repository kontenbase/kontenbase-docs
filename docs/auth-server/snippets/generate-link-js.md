const { user, error } = await kontenbase.auth.generateLink({
  'invite', 
  'user@mail.com'
})
