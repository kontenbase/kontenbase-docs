---
title: $nin
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import NinJs from '!!raw-loader!./snippets/nin-js.md';
import NinGo from '!!raw-loader!./snippets/nin-go.md';
import NinPHP from '!!raw-loader!./snippets/nin-php.md';
import NinApi from '!!raw-loader!./snippets/nin-api.md';

Find all records where the property does not match any of the given values.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {NinJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {NinGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="php" label="PHP" default>
    <CodeBlock className="language-jsx">
      {NinPHP}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {NinApi}
    </CodeBlock>
  </TabItem>
</Tabs>
