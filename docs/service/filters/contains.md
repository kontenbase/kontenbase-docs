---
title: $contains
---

Finds all rows whose value in the stated column matches the supplied pattern (case sensitive).

```javascript
const { data, error } = await kontenbase.service('posts')
    .find({
        where: { title: {$contains: 'My Post Title'}}
    })
```