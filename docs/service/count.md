---
title: count()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import CountJs from '!!raw-loader!./snippets/count-js.md';
import CountGo from '!!raw-loader!./snippets/count-go.md';
import CountPHP from '!!raw-loader!./snippets/count-php.md';
import CountApi from '!!raw-loader!./snippets/count-api.md';

Count total records in the service.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {CountJs}
    </CodeBlock>

### Response

| Name            | Type   | Description |
| --------------- | ------ | ----------- | 
| res.data    | object | Response for data |
| res.status  | number | Response for status code |
| res.statusText | string | Response for status message |
| res.error | object | Response for error occurred |

:::note

Count records with filters:

```javascript
const { data, error } = await kontenbase.service('posts').count({
    "name": "Ega",
})
```

:::

  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {CountGo}
    </CodeBlock>

### Response

| Name            | Type   | Description |
| --------------- | ------ | ----------- | 
| resp.Data    | map[string]interface{} | Response for data |
| resp.Status  | int | Response for status code |
| resp.StatusText | string | Response for status message |

:::note

Count records with filters:

```go
resp, err := client.Service("posts").Count()
  .SetWhere(map[string]interface{}{
    "name": "Ega",
  })
```

:::

  </TabItem>
  <TabItem value="php" label="PHP" default>
    <CodeBlock className="language-jsx">
      {CountPHP}
    </CodeBlock>

### Response

| Name            | Type   | Description |
| --------------- | ------ | ----------- | 
| $res['data']    | object | Response for data |
| $res['status']  | integer | Response for status code |
| $res['statusText'] | string | Response for status message |
| $res['error'] | object | Response for error occurred |

:::note

Count records with filters:

```javascript
$res = $kontenbase->service('posts')->count([
	'where' => [
		'name' => 'Ega'
	]
]);
```

:::

  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {CountApi}
    </CodeBlock>
  </TabItem>
</Tabs>
