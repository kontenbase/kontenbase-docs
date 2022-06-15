---
title: login()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import LoginJs from '!!raw-loader!./snippets/login-js.md';
import GoJs from '!!raw-loader!./snippets/login-go.md';
import LoginApi from '!!raw-loader!./snippets/login-api.md';

Log in an existing user.
<!-- Kontenbase give you some option to choose login strategy. -->

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {LoginJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {GoJs}
    </CodeBlock>
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

:::info

- (Javascript only) Using this method in browser will also save the returned token in `localStorage`.

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
