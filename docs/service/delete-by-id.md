---
title: deleteById()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import DeleteByIdJs from '!!raw-loader!./snippets/delete-by-id-js.md';
import DeleteByIdApi from '!!raw-loader!./snippets/delete-by-id-api.md';

Delete a record by id.
<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {DeleteByIdJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[DELETE]">
      {DeleteByIdApi}
    </CodeBlock>
  </TabItem>
</Tabs>
