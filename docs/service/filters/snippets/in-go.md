resp, err := client.Service("posts").Find()
  .SetWhere(map[string]interface{}{
    "status": map[string]interface{}{
      "$in": []interface{}{"todo", "done"},
    },
  })