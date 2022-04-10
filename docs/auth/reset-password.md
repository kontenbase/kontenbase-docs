---
title: resetPassword()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import ResetPasswordJs from '!!raw-loader!./snippets/reset-password-js.md';
import ResetPasswordApi from '!!raw-loader!./snippets/reset-password-api.md';

Return user data if there is a logged in user

<Tabs>
  <TabItem value="javascript" label="Javascript" default>    
    <CodeBlock className="language-jsx">
      {ResetPasswordJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">    
    <CodeBlock className="language-jsx" title="[POST]">
      {ResetPasswordApi}
    </CodeBlock>
  </TabItem>
</Tabs>
