---
title: logout()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import LogoutJs from '!!raw-loader!./snippets/logout-js.md';
import LogoutApi from '!!raw-loader!./snippets/logout-api.md';

Log out a logged in user.
<!-- Remove the logged in user from the browser session and log them out - removing all items from localstorage -->

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {LogoutJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[POST]">
      {LogoutApi}
    </CodeBlock>
  </TabItem>
</Tabs>

:::note

- `token` used will be removed and no longer available for authentication

:::
