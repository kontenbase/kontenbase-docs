---
title: $contains
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ContainsJs from '!!raw-loader!./snippets/contains-js.md';
import ContainsApi from '!!raw-loader!./snippets/contains-api.md';

Find all records where the value matches a given value (case insensitive).

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {ContainsJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {ContainsApi}
    </CodeBlock>
  </TabItem>
</Tabs>
