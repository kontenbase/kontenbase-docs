resp, err := client.Service("posts").Find()
  .SetWhere(map[string]interface{}{
    "number": map[string]interface{}{
      "$gte": 10,
    },
  })