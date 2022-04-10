---
title: $in
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import InJs from '!!raw-loader!./snippets/in-js.md';
import InApi from '!!raw-loader!./snippets/in-api.md';

Find all records where the property does match any of the given values.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {InJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {InApi}
    </CodeBlock>
  </TabItem>
</Tabs>
