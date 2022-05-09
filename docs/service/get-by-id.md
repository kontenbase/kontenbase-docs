---
title: getById()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import GetByIdJs from '!!raw-loader!./snippets/get-by-id-js.md';
import GetByIdApi from '!!raw-loader!./snippets/get-by-id-api.md';

Get a record by id.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {GetByIdJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {GetByIdApi}
    </CodeBlock>
  </TabItem>
</Tabs>

:::note

Get a record with filters:
- select
- lookup

```javascript
const { data, error } = await kontenbase.service('posts').getById('605a251d7b8678bf6811k3b1', {
  filterKey: filterValue,
  ...
})
```

:::
