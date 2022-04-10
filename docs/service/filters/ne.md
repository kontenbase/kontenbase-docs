---
title: $ne
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import NeJs from '!!raw-loader!./snippets/ne-js.md';
import NeApi from '!!raw-loader!./snippets/ne-api.md';

Find all records that do not equal the given property value.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {NeJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {NeApi}
    </CodeBlock>
  </TabItem>
</Tabs>
