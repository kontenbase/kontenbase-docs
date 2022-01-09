---
title: $eq
---

Finds all rows whose value on the stated column exactly matches the specified value.

```javascript
const { data, error } = await kontenbase.service('posts')
    .find({ title: {$eq: 'My Post Title'}})
```

or equivalent with

```javascript
const { data, error } = await kontenbase.service('posts')
    .find({ title: 'My Post Title'})
```