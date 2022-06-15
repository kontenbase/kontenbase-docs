resp, err := client.Service("posts").UpdateByID("605a251d7b8678bf6811k3b1", map[string]interface{}{
    "notes": "Hello world",
})