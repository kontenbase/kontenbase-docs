---
title: unsubscribe()
---

Subscribe to realtime changes in your service.

```javascript
const subscription = await kontenbase.realtime.subscribe('posts', { event: 'CREATE_RECORD', where: { tags: 'sport' } }, (message) => {
  console.log(message)
})

kontenbase.realtime.unsubscribe(subscription)
```