---
title: upload()
---

Uploads a file to an existing bucket.

```javascript
// from client
const file = event.target.files[0];
const { data, error } = await kontenbase.storage.upload(file);
```

```javascript
// from server
const file = req.files[0];
const { data, error } = await kontenbase.storage.upload(
  file.buffer,
  file.originalname,
);
```

### Notes
- Default bucket used is Kontenbase project id
