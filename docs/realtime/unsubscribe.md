---
title: unsubscribe()
---

Subscribe to realtime changes in your service.

```javascript
const subscription = await kontenbase.realtime.subscribe('posts', '*', (payload) => {
  console.log(payload)
})

kontenbase.realtime.unsubscribe(subscription)
```