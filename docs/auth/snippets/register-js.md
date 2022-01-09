const { data } = await kontenbase.auth.register({
    firstName: 'John',
    lastName: 'Doe',
    email: 'user@gmail.com',
    password: 'password',
})