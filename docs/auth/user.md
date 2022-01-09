---
title: user()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import UserJs from '!!raw-loader!./snippets/user-js.md';
import UserApi from '!!raw-loader!./snippets/user-api.md';

Return user data if there is a logged in user
<Tabs>
  <TabItem value="javascript" label="Javascript" default>    
    <CodeBlock className="language-jsx">
      {UserJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">    
    <CodeBlock className="language-jsx" title="[GET]">
      {UserApi}
    </CodeBlock>
  </TabItem>
</Tabs>