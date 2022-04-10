---
title: or
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import OrJs from '!!raw-loader!./snippets/or-js.md';
import OrApi from '!!raw-loader!./snippets/or-api.md';

Find all records that match any of the given criteria.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {OrJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {OrApi}
    </CodeBlock>
  </TabItem>
</Tabs>
