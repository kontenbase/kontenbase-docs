---
title: unsubscribe()
---

Unsubscribe to realtime changes in your service.

```javascript
const key = await kontenbase.realtime.subscribe(
  'posts',
  { event: '*' },
  (message) => {
    if (message.error) {
      console.log(message.error)
      return
    }

    console.log(message.event, message.payload)
  }
)

kontenbase.realtime.unsubscribe(key)
```
