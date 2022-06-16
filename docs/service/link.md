---
title: link()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import LinkJs from '!!raw-loader!./snippets/link-js.md';
import LinkGo from '!!raw-loader!./snippets/link-go.md';
import LinkPHP from '!!raw-loader!./snippets/link-php.md';
import LinkApi from '!!raw-loader!./snippets/link-api.md';

Link an existing record to a destinated related record on other service.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {LinkJs}
    </CodeBlock>

### Response

| Name            | Type   | Description |
| --------------- | ------ | ----------- | 
| res.data    | object | Response for data |
| res.status  | number | Response for status code |
| res.statusText | string | Response for status message |
| res.error | object | Response for error occurred |

  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {LinkGo}
    </CodeBlock>

### Response

| Name            | Type   | Description |
| --------------- | ------ | ----------- | 
| resp.Data    | map[string]interface{} | Response for data |
| resp.Status  | int | Response for status code |
| resp.StatusText | string | Response for status message |

  </TabItem>
  <TabItem value="php" label="PHP" default>
    <CodeBlock className="language-jsx">
      {LinkPHP}
    </CodeBlock>

### Response

| Name            | Type   | Description |
| --------------- | ------ | ----------- | 
| $res['data']    | object | Response for data |
| $res['status']  | integer | Response for status code |
| $res['statusText'] | string | Response for status message |
| $res['error'] | object | Response for error occurred |

  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[LINK]">
      {LinkApi}
    </CodeBlock>
  </TabItem>
</Tabs>
