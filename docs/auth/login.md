---
title: login()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import LoginJs from '!!raw-loader!./snippets/login-js.md';
import LoginGo from '!!raw-loader!./snippets/login-go.md';
import LoginPHP from '!!raw-loader!./snippets/login-php.md';
import LoginApi from '!!raw-loader!./snippets/login-api.md';

Log in an existing user.
<!-- Kontenbase give you some option to choose login strategy. -->

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {LoginJs}
    </CodeBlock>

### Response

| Name            | Type   | Description |
| --------------- | ------ | ----------- | 
| res.user    | object | Response for data user |
| res.token   | string | Response for data token |
| res.status  | number | Response for status code |
| res.statusText | string | Response for status message |
| res.error | object | Response for error occurred |    

:::info

Using this method in browser will also save the returned token in `localStorage`.

:::

  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {LoginGo}
    </CodeBlock>

### Response

| Name            | Type   | Description |
| --------------- | ------ | ----------- | 
| resp.User    | map[string]interface{} | Response for data user |
| resp.Token   | string | Response for data token |
| resp.Status  | int | Response for status code |
| resp.StatusText | string | Response for status message |

  </TabItem>
  <TabItem value="php" label="PHP" default>
    <CodeBlock className="language-jsx">
      {LoginPHP}
    </CodeBlock>

### Response

| Name            | Type   | Description |
| --------------- | ------ | ----------- | 
| $res['user']    | object | Response for data user |
| $res['token']   | string | Response for data token |
| $res['status']  | integer | Response for status code |
| $res['statusText'] | string | Response for status message |
| $res['error'] | object | Response for error occurred |
    
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[POST]">
      {LoginApi}
    </CodeBlock>
  </TabItem>
</Tabs>

:::note

- `token` returned is a Bearer Token Authentication that can be set in the header

:::

<!-- ## Examples

### Login with Email

```javascript
const { user, error } = await kontenbase.auth.login({
  email: 'user@mail.com',
  password: 'password'
})
```

### Login with Magic Link

```javascript
const { user, error } = await kontenbase.auth.login({
  email: 'user@mail.com'
})
```

### Login with Third Party Provider
```javascript
const { user, error } = await kontenbase.auth.login({
  provider: 'google'
})
```

### Login with Phone 
```javascript
const { user, error } = await kontenbase.auth.login({
  phone: '+62817891011',
  password: 'password'
})
```

### Login then Redirect
```javascript
const { user, error } = await kontenbase.auth.login({
  provider: 'google'
}, {
  redirectTo: 'https://yoursite.com/example'
})
``` -->
