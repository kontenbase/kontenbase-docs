---
title: inviteUserByEmail()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import InviteUserByEmailJs from '!!raw-loader!./snippets/invite-user-by-email-js.md';
import InviteUserByEmailApi from '!!raw-loader!./snippets/invite-user-by-email-api.md';

Sends an invite link to an email address.
<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {InviteUserByEmailJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[POST]">
      {InviteUserByEmailApi}
    </CodeBlock>
  </TabItem>
</Tabs>

### Parameters
|Name   |Type  |Description       |
|-------|------|------------------|
|email (required)|string|The user email|

### Notes
- This function should only be called on server
