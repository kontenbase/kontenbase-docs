---
title: upload()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

Uploads a file to an existing bucket.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>

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

  </TabItem>
  <TabItem value="go" label="Go" default>

```go
file, err := os.Open("your_file.txt")
if err != nil {
  return err
}

defer file.Close()

resp, err := client.Storage.Upload(file)
```

  </TabItem>
</Tabs>

:::note

- Default bucket used is Kontenbase project id

:::
