---
title: user()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import UserJs from '!!raw-loader!./snippets/user-js.md';
import UserGo from '!!raw-loader!./snippets/user-go.md';
import UserPHP from '!!raw-loader!./snippets/user-php.md';
import UserApi from '!!raw-loader!./snippets/user-api.md';

Return user data if there is a logged in user

<Tabs>
  <TabItem value="javascript" label="Javascript" default>    
    <CodeBlock className="language-jsx">
      {UserJs}
    </CodeBlock>

### Response

| Name            | Type   | Description |
| --------------- | ------ | ----------- | 
| res.user    | object | Response for data user |
| res.status  | number | Response for status code |
| res.statusText | string | Response for status message |
| res.error | object | Response for error occurred |

:::note

- When using SDK you need to call `register()` or `login()` first
- When using API you need to set the Bearer `token` returned by register or login API in the header request
- Get user with filter:
  - lookup

```javascript
const { user, error } = await kontenbase.auth.user({
  lookup: ['categories'],
})
```

:::

  </TabItem>
  <TabItem value="go" label="Go" default>    
    <CodeBlock className="language-jsx">
      {UserGo}
    </CodeBlock>

:::note

- When using SDK you need to call `register()` or `login()` first
- When using API you need to set the Bearer `token` returned by register or login API in the header request
- Get user with filter:
  - lookup

```go
resp, err := client.Auth.User()
  .SetLookup("*")
```

:::

  </TabItem>
  <TabItem value="php" label="PHP" default>    
    <CodeBlock className="language-jsx">
      {UserPHP}
    </CodeBlock>

### Response

| Name            | Type   | Description |
| --------------- | ------ | ----------- | 
| $res['user']    | object | Response for data user |
| $res['status']  | integer | Response for status code |
| $res['statusText'] | string | Response for status message |
| $res['error'] | object | Response for error occurred |

:::note

- When using SDK you need to call `register()` or `login()` first
- When using API you need to set the Bearer `token` returned by register or login API in the header request
- Get user with filter:
  - lookup

```javascript
  $res = $kontenbase->auth->user([
    'lookup' => '*'
  ]);
```

:::

  </TabItem>
  <TabItem value="API" label="API">    
    <CodeBlock className="language-jsx" title="[GET]">
      {UserApi}
    </CodeBlock>
  </TabItem>
</Tabs>