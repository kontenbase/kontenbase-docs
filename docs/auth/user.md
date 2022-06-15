---
title: user()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import UserJs from '!!raw-loader!./snippets/user-js.md';
import UserGo from '!!raw-loader!./snippets/user-go.md';
import UserApi from '!!raw-loader!./snippets/user-api.md';

Return user data if there is a logged in user

<Tabs>
  <TabItem value="javascript" label="Javascript" default>    
    <CodeBlock className="language-jsx">
      {UserJs}
    </CodeBlock>

:::note

- When using SDK you need to call `register()` or `login()` first
- When using API you need to set the Bearer `token` returned by register or login API in the header request
- Get user with filter:
  - lookup

```javascript
const { user, error } = await kontenbase.auth.user({
  filterKey: filterValue,
  ...
})
```

:::

  </TabItem>
  <TabItem value="go" label="Go" default>    
    <CodeBlock className="language-jsx">
      {UserGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">    
    <CodeBlock className="language-jsx" title="[GET]">
      {UserApi}
    </CodeBlock>
  </TabItem>
</Tabs>