---
title: register()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import RegisterJs from '!!raw-loader!./snippets/register-js.md';
import RegisterGo from '!!raw-loader!./snippets/register-go.md';
import RegisterApi from '!!raw-loader!./snippets/register-api.md';

Register a new user.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>    
    <CodeBlock className="language-jsx">
      {RegisterJs}
    </CodeBlock>

:::info

- (Javascript only) Using this method in browser will also save the returned token in `localStorage`.

:::

  </TabItem>
  <TabItem value="go" label="Go" default>    
    <CodeBlock className="language-jsx">
      {RegisterGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[POST]">
      {RegisterApi}
    </CodeBlock>
  </TabItem>
</Tabs>

:::note

- First registered user will have "admin" role
- `token` returned is a Bearer Token Authentication that can be set in the header

:::