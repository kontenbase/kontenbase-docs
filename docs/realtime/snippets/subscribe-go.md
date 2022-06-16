func onMessage (event string, payload map[string]interface{}) error {
  fmt.Println(event)
	return nil
}

func onError (event string, payload map[string]interface{}) error {
  fmt.Println(payload)
	return nil
}

func main() {
  key, err := client.Realtime.Subscribe("Movies", options.SubscribeOptions{
    Event:     options.RealtimeAll,
    OnMessage: onMessage,
    OnError:   onError,
  })
}