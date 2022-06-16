resp, err := client.Service("posts").Find()
  .SetLimit(10)