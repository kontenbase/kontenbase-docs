---
title: upload()
---

Uploads a file to an existing bucket.

```javascript
const file = event.target.files[0]
const { data } = await kontenbase.storage.upload(file)
```

## Note
- Default Bucket used is Kontenbase project name