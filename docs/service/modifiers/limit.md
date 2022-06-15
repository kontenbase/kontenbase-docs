---
title: limit
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import LimitJs from '!!raw-loader!./snippets/limit-js.md';
import LimitGo from '!!raw-loader!./snippets/limit-go.md';
import LimitApi from '!!raw-loader!./snippets/limit-api.md';

Limit the result with the specified count.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {LimitJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {LimitGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {LimitApi}
    </CodeBlock>
  </TabItem>
</Tabs>
