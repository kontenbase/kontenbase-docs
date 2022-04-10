---
title: where
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import WhereJs from '!!raw-loader!./snippets/where-js.md';
import WhereApi from '!!raw-loader!./snippets/where-api.md';

Find all records that match all of the given criteria.

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
