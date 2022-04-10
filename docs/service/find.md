---
title: find()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import FindJs from '!!raw-loader!./snippets/find-js.md';
import FindApi from '!!raw-loader!./snippets/find-api.md';

Find all records from the service.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {FindJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {FindApi}
    </CodeBlock>
  </TabItem>
</Tabs>

### Notes
- By default Kontenbase will return a maximum of 100 records to prevent from malicious requests. 

<!-- ## Examples

### Find All Data
```javascript
const { data, error } = await kontenbase.service('posts').find()
```

### Find Specific Fields
```javascript
const { data, error } = await kontenbase.service('posts')
    .find({select: ['title', 'description', 'image']})
```

### Find with Relation (Lookup)
```javascript
const { data, error } = await kontenbase.service('posts')
  .find({ lookup: ['categories', 'createdBy'] })
``` -->
