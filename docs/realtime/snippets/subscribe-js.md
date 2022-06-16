kontenbase.realtime.subscribe('posts', { event: '*' }, (message) => {
  if (message.error) {
    console.log(message.error)
    return
  }

  console.log(message.event, message.payload)
})