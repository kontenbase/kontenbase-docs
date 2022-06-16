---
title: register()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import RegisterJs from '!!raw-loader!./snippets/register-js.md';
import RegisterGo from '!!raw-loader!./snippets/register-go.md';
import RegisterPHP from '!!raw-loader!./snippets/register-php.md';
import RegisterApi from '!!raw-loader!./snippets/register-api.md';

Register a new user.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>    
    <CodeBlock className="language-jsx">
      {RegisterJs}
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
      {RegisterGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="php" label="PHP" default>    
    <CodeBlock className="language-jsx">
      {RegisterPHP}
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
      {RegisterApi}
    </CodeBlock>
  </TabItem>
</Tabs>

:::note

- First registered user will have "admin" role
- `token` returned is a Bearer Token Authentication that can be set in the header

:::