resp, err := client.Auth.Register(client.RegisterParams{
  FirstName: "Ega",
  LastName: "Radiegtya",
  Email: "user@mail.com",
  Password: "password",
})