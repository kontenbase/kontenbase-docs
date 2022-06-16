resp, err := client.Service("posts").Find()
  .SetSkip(10)