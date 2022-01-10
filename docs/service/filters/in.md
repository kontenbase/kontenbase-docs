---
title: $in
---

Finds all rows whose value on the stated column is found on the specified values.

```javascript
const { data, error } = await kontenbase.service('posts')
    .find({
        where:{ 
            tags: {$in: ['sport', 'game', 'electronic']}
        }
    })
```