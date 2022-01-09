---
title: $lte
---

Finds all rows whose value on the stated column is less than or equal to the specified value.

```javascript
const { data, error } = await kontenbase.service('posts')
    .find({ like: {$lte: 100}})
```