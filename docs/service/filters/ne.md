---
title: $ne
---

Finds all rows whose value on the stated column doesn't match the specified value.

```javascript
const { data, error } = await kontenbase.service('posts')
    .find({
        where: { title: {$ne: 'My Post Title'}}
    })
```