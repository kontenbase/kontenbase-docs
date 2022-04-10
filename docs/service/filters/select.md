---
title: select
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import SelectJs from '!!raw-loader!./snippets/select-js.md';
import SelectApi from '!!raw-loader!./snippets/select-api.md';

Allows to pick which fields to include in the result.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {SelectJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {SelectApi}
    </CodeBlock>
  </TabItem>
</Tabs>
