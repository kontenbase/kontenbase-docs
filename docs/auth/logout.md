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

| Name            | Type   | Description |
| --------------- | ------ | ----------- | 
| res.user    | object | Response for data user |
| res.token   | string | Response for data token |
| res.status  | number | Response for status code |
| res.statusText | string | Response for status message |
| res.error | object | Response for error occurred |

:::info

Using this method in browser will also remove the saved token in `localStorage`.

:::

  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {LogoutGo}
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
      {LogoutPHP}
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
      {LogoutApi}
    </CodeBlock>
  </TabItem>
</Tabs>

:::note

- After logout, `token` set in the header will no longer be valid for authentication

:::