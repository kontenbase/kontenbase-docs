---
title: updateById()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import UpdateByIdJs from '!!raw-loader!./snippets/update-by-id-js.md';
import UpdateByIdApi from '!!raw-loader!./snippets/update-by-id-api.md';

Update record by id.
<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {UpdateByIdJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[PATCH]">
      {UpdateByIdApi}
    </CodeBlock>
  </TabItem>
</Tabs>
