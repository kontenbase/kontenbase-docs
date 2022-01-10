---
title: $nin
---

Finds all rows whose value on the stated column is not on the specified values.

```javascript
const { data, error } = await kontenbase.service('posts')
    .find({
        where: { 
            tags: {$nin: ['sport', 'game', 'electronic']}
        }
    })
```