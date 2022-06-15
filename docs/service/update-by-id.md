---
title: updateById()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import UpdateByIdJs from '!!raw-loader!./snippets/update-by-id-js.md';
import UpdateByIdGo from '!!raw-loader!./snippets/update-by-id-go.md';
import UpdateByIdApi from '!!raw-loader!./snippets/update-by-id-api.md';

Update a record by id.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {UpdateByIdJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {UpdateByIdGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[PATCH]">
      {UpdateByIdApi}
    </CodeBlock>
  </TabItem>
</Tabs>
