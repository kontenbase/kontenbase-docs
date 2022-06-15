---
title: sort
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import SortJs from '!!raw-loader!./snippets/sort-js.md';
import SortApi from '!!raw-loader!./snippets/sort-api.md';

Sort the result with the specified field.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {SortJs}
    </CodeBlock>
  </TabItem>  
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {SortApi}
    </CodeBlock>
  </TabItem>
</Tabs>

:::note

- Ascending = 1
- Descending = -1

:::
