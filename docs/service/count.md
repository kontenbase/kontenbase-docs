---
title: count()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import CountJs from '!!raw-loader!./snippets/count-js.md';
import CountApi from '!!raw-loader!./snippets/count-api.md';

Count total records in the service.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {CountJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {CountApi}
    </CodeBlock>
  </TabItem>
</Tabs>

:::note

Count records with filters:

```javascript
const { data, error } = await kontenbase.service('posts').count({
    filterKey: filterValue,
    ...
})
```

:::
