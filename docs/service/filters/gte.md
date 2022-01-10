---
title: $gte
---

Finds all rows whose value on the stated column is greater than or equal to the specified value.

```javascript
const { data, error } = await kontenbase.service('posts')
    .find({
        where: { share: {$gte: 100}}
    })
```