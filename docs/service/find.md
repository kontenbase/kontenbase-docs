---
title: find()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import FindJs from '!!raw-loader!./snippets/find-js.md';
import FindApi from '!!raw-loader!./snippets/find-api.md';

Sends an invite link to an email address.
<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {FindJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[POST]">
      {FindApi}
    </CodeBlock>
  </TabItem>
</Tabs>

## Note
- By Default Kontenbase will return a maximum of 1.000 rows to prevent from malicious requests. 

## Examples

### Find All Data
```
const { data, error } = await kontenbase.service('posts').find()
```

### Find Specific Fields
```
const { data, error } = await kontenbase.service('posts')
    .find()
    .select(`
        title,
        description,
        image
    `) 
```

### Find with Relation
```
const { data, error } = await kontenbase.service('posts')
    .find()
    .select(`
        title,
        createdBy {
            firstName
        },
        comments {
            text
        }
    `) 
```

### Find with Count
```
const { data, error, count } = await kontenbase.service('posts').find()
```