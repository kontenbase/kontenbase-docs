---
title: $gt
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import GtJs from '!!raw-loader!./snippets/gt-js.md';
import GtGo from '!!raw-loader!./snippets/gt-go.md';
import GtPHP from '!!raw-loader!./snippets/gt-php.md';
import GtApi from '!!raw-loader!./snippets/gt-api.md';

Find all records where the value is more to a given value.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {GtJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {GtGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="php" label="PHP" default>
    <CodeBlock className="language-jsx">
      {GtPHP}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {GtApi}
    </CodeBlock>
  </TabItem>
</Tabs>
