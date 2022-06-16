---
title: update()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import UpdateJs from '!!raw-loader!./snippets/update-js.md';
import UpdateGo from '!!raw-loader!./snippets/update-go.md';
import UpdatePHP from '!!raw-loader!./snippets/update-php.md';
import UpdateApi from '!!raw-loader!./snippets/update-api.md';

Update user data if there is a logged in user.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>    
    <CodeBlock className="language-jsx">
      {UpdateJs}
    </CodeBlock>

### Response

| Name            | Type   | Description |
| --------------- | ------ | ----------- | 
| res.user    | object | Response for data user |
| res.status  | number | Response for status code |
| res.statusText | string | Response for status message |
| res.error | object | Response for error occurred |

  </TabItem>
  <TabItem value="go" label="Go" default>    
    <CodeBlock className="language-jsx">
      {UpdateGo}
    </CodeBlock>

### Response

| Name            | Type   | Description |
| --------------- | ------ | ----------- | 
| resp.User    | map[string]interface{} | Response for data user |
| resp.Status  | int | Response for status code |
| resp.StatusText | string | Response for status message |

  </TabItem>
  <TabItem value="php" label="PHP" default>    
    <CodeBlock className="language-jsx">
      {UpdatePHP}
    </CodeBlock>

### Response

| Name            | Type   | Description |
| --------------- | ------ | ----------- | 
| $res['user']    | object | Response for data user |
| $res['status']  | integer | Response for status code |
| $res['statusText'] | string | Response for status message |
| $res['error'] | object | Response for error occurred |

  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[PATCH]">
      {UpdateApi}
    </CodeBlock>
  </TabItem>
</Tabs>

:::note

- When using SDK you need to call `register()` or `login()` first
- When using API you need to set the Bearer `token` returned by register or login API in the header request

:::
