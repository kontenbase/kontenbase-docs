---
title: delete()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import DeleteJs from '!!raw-loader!./snippets/delete-js.md';
import DeleteApi from '!!raw-loader!./snippets/delete-api.md';

Delete a record by specified query.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {DeleteJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[DELETE]">
      {DeleteApi}
    </CodeBlock>
  </TabItem>
</Tabs>
