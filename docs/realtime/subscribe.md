---
title: subscribe()
---

Subscribe to realtime changes in your service.

```javascript
kontenbase.realtime.subscribe('posts', { event: '*' }, (message) => {
  if (message.error) {
    console.log(message.error)
    return
  }

  console.log(message.event, message.payload)
})
```

### Parameters

| Name            | Type   | Required | Description                                                             |
| --------------- | ------ | -------- | ----------------------------------------------------------------------- |
| serviceName     | string | true     | The service name to be subscribed                                       |
| condition       | object | true     | Condition consists of event and where                                   |
| condition.event | string | true     | The event can be `*`, `CREATE_RECORD`, `UPDATE_RECORD`. `DELETE_RECORD` |
| condition.where | object | false    | Refering to filters docs                                                |
