---
title: $gt
---

Finds all rows whose value on the stated column is greater than the specified value.

```javascript
const { data, error } = await kontenbase.service('posts')
    .find({ like: {$gt: 100}})
```