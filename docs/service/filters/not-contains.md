---
title: $notContains
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import NotContainsJs from '!!raw-loader!./snippets/not-contains-js.md';
import NotContainsGo from '!!raw-loader!./snippets/not-contains-go.md';
import NotContainsPHP from '!!raw-loader!./snippets/not-contains-php.md';
import NotContainsApi from '!!raw-loader!./snippets/not-contains-api.md';

Find all records where the value does not match a given value (case insensitive).

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {NotContainsJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {NotContainsGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="php" label="PHP" default>
    <CodeBlock className="language-jsx">
      {NotContainsPHP}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {NotContainsApi}
    </CodeBlock>
  </TabItem>
</Tabs>
