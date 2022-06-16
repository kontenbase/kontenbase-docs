resp, err := client.Service("posts").Find()
  .SetLookup("*")