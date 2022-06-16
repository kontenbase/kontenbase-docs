resp, err := client.Service("posts").Create(map[string]interface{}{
  "name" : "Post 1",
  "notes": "Hello Kontenbase",
})