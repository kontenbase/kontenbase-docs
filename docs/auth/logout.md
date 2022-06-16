---
title: logout()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import LogoutJs from '!!raw-loader!./snippets/logout-js.md';
import LogoutGo from '!!raw-loader!./snippets/logout-go.md';
import LogoutPHP from '!!raw-loader!./snippets/logout-php.md';
import LogoutApi from '!!raw-loader!./snippets/logout-api.md';

Log out a logged in user.
<!-- Remove the logged in user from the browser session and log them out - removing all items from localstorage -->

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {LogoutJs}
    </CodeBlock>

:::info

Using this method in browser will also remove the saved token in `localStorage`.

:::

  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {LogoutGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="php" label="PHP" default>
    <CodeBlock className="language-jsx">
      {LogoutPHP}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[POST]">
      {LogoutApi}
    </CodeBlock>
  </TabItem>
</Tabs>

:::note

- After logout, `token` set in the header will no longer be valid for authentication

:::