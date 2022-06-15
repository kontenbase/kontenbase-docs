---
title: $lte
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import LteJs from '!!raw-loader!./snippets/lte-js.md';
import LteGo from '!!raw-loader!./snippets/lte-go.md';
import LteApi from '!!raw-loader!./snippets/lte-api.md';

Find all records where the value is less and equal to a given value.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {LteJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {LteGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {LteApi}
    </CodeBlock>
  </TabItem>
</Tabs>
