resp, err := client.Service("posts").Find()
  .SetSelect([]interface{}{"name", "notes"})