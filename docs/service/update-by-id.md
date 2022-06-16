---
title: updateById()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import UpdateByIdJs from '!!raw-loader!./snippets/update-by-id-js.md';
import UpdateByIdGo from '!!raw-loader!./snippets/update-by-id-go.md';
import UpdateByIdPHP from '!!raw-loader!./snippets/update-by-id-php.md';
import UpdateByIdApi from '!!raw-loader!./snippets/update-by-id-api.md';

Update a record by id.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {UpdateByIdJs}
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
      {UpdateByIdGo}
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
      {UpdateByIdPHP}
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
    <CodeBlock className="language-jsx" title="[PATCH]">
      {UpdateByIdApi}
    </CodeBlock>
  </TabItem>
</Tabs>
