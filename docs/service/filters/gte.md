---
title: $gte
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import GteJs from '!!raw-loader!./snippets/gte-js.md';
import GteGo from '!!raw-loader!./snippets/gte-go.md';
import GteApi from '!!raw-loader!./snippets/gte-api.md';

Find all records where the value is more and equal to a given value.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {GteJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {GteGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {GteApi}
    </CodeBlock>
  </TabItem>
</Tabs>
