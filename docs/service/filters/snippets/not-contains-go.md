resp, err := client.Service("posts").Find()
  .SetWhere(map[string]interface{}{
    "notes": map[string]interface{}{
      "$notContains": "hello",
    },
  })