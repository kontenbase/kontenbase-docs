---
title: $lt
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import LtJs from '!!raw-loader!./snippets/lt-js.md';
import LtGo from '!!raw-loader!./snippets/lt-go.md';
import LtPHP from '!!raw-loader!./snippets/lt-php.md';
import LtApi from '!!raw-loader!./snippets/lt-api.md';

Find all records where the value is less to a given value.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {LtJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {LtGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="php" label="PHP" default>
    <CodeBlock className="language-jsx">
      {LtPHP}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {LtApi}
    </CodeBlock>
  </TabItem>
</Tabs>
