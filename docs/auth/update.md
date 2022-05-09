---
title: update()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import UpdateJs from '!!raw-loader!./snippets/update-js.md';
import UpdateApi from '!!raw-loader!./snippets/update-api.md';

Update user data if there is a logged in user.

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

:::note

- When using SDK you need to call `register()` or `login()` first
- When using API you need to set the Bearer `token` returned by register or login API in the header request

:::
