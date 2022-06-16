resp, err := client.Service("posts").Find()
  .SetWhere(map[string]interface{}{
    "name": "Ega",    
  })