resp, err := client.Service("posts").Find()
  .SetWhere(map[string]interface{}{
    "number": map[string]interface{}{
      "$gt": 10,
    },
  })