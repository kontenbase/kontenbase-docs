---
title: $or
---

Finds all rows satisfying at least one of the filters.

```javascript
const { data, error } = await kontenbase.service('posts')
    .find({
        $or: [
            {tags: 'sport'},
            {tags: 'game'}
        ]
    })
```