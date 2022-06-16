---
title: getById()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import GetByIdJs from '!!raw-loader!./snippets/get-by-id-js.md';
import GetByIdGo from '!!raw-loader!./snippets/get-by-id-go.md';
import GetByIdApi from '!!raw-loader!./snippets/get-by-id-api.md';

Get a record by id.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {GetByIdJs}
    </CodeBlock>

:::note

Get a record with filters:
- select

```javascript
const { data, error } = await kontenbase.service('posts').getById('605a251d7b8678bf6811k3b1', {
  select: ['name'],
})
```

- lookup

```javascript
const { data, error } = await kontenbase.service('posts').getById('605a251d7b8678bf6811k3b1', {
  lookup: ['categories'],
})
```

:::

  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {GetByIdGo}
    </CodeBlock>

:::note

Get a record with filters:
- select

```go
resp, err := client.Service("posts").GetByID("605a251d7b8678bf6811k3b1")
  .SetSelect([]interface{}{"name", "notes"})
```

- lookup

```go
resp, err := client.Service("posts").GetByID("605a251d7b8678bf6811k3b1")
   .SetLookup("*")
```

:::

  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {GetByIdApi}
    </CodeBlock>
  </TabItem>
</Tabs>