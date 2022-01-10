---
title: $lt
---

Finds all rows whose value on the stated column is less than the specified value.

```javascript
const { data, error } = await kontenbase.service('posts')
    .find({
        where: { share: {$lt: 100}}
    })
```