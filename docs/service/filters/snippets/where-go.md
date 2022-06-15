resp, err := client.Service("posts").Find()
  .SetWhere(map[string]interface{}{
    "name": "Ega",
    "notes": map[string]interface{}{
      "$contains": "hello",
    },
    "number": map[string]interface{}{
      "$gte": 10,
    },
    "status" map[string]interface{}{
      "$in": []interface{}{"todo", "done"},
    },
  })