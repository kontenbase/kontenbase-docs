---
title: subscribe()
---

Subscribe to realtime changes in your service.

```javascript
kontenbase.realtime.subscribe('posts', '*', (payload) => {
  console.log(payload)
})
```

## Parameters
|Name   |Type  |Description       |
|-------|------|------------------|
|serviceName (required)|string|The Service Name to be subscribed|
|event (required)|string|The event can be "*"/"created"/"updated"/"deleted"|