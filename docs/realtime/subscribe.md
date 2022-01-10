---
title: subscribe()
---

Subscribe to realtime changes in your service.

```javascript
kontenbase.realtime.subscribe('posts', { event: 'CREATE_RECORD', where: { tags: 'sport' } }, (message) => {
  console.log(message)
})
```

## Parameters
|Name   |Type  |Description       |
|-------|------|------------------|
|serviceName (required)|string|The Service Name to be subscribed|
|condition (required)|object|condition consists of event and where|
|condition.event (required)|string|The event can be "*"/"CREATE_RECORD"/"UPDATE_RECORD"/"DELETE_RECORD"|
|condition.where| object | refer to filters docs|