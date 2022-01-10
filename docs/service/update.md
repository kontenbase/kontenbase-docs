---
title: update()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import UpdateJs from '!!raw-loader!./snippets/update-js.md';
import UpdateApi from '!!raw-loader!./snippets/update-api.md';

Update record by specified query.
<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {UpdateJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[PATCH]">
      {UpdateApi}
    </CodeBlock>
  </TabItem>
</Tabs>
