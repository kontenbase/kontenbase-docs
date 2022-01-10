---
title: where
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import WhereJs from '!!raw-loader!./snippets/where-js.md';
import WhereApi from '!!raw-loader!./snippets/where-api.md';

Where can be used on select(), update(), and delete() queries.
<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {WhereJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {WhereApi}
    </CodeBlock>
  </TabItem>
</Tabs>
