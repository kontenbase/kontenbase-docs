resp, err := client.Auth.Login(client.LoginParams{
  Email: "user@mail.com",
  Password: "password",
})