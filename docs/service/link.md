---
title: link()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import LinkJs from '!!raw-loader!./snippets/link-js.md';
import LinkApi from '!!raw-loader!./snippets/link-api.md';

Link an existing record to a destinated related record on other service.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {LinkJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[LINK]">
      {LinkApi}
    </CodeBlock>
  </TabItem>
</Tabs>
