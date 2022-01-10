---
title: $notContains
---

Finds all rows whose value not in the stated column matches the supplied pattern (case sensitive).

```javascript
const { data, error } = await kontenbase.service('posts')
    .find({
        where: { title: {$notContains: 'My Post Title'}}
    })
```