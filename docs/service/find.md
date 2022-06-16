---
title: find()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import FindJs from '!!raw-loader!./snippets/find-js.md';
import FindGo from '!!raw-loader!./snippets/find-go.md';
import FindPHP from '!!raw-loader!./snippets/find-php.md';
import FindApi from '!!raw-loader!./snippets/find-api.md';

Find all records from the service.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {FindJs}
    </CodeBlock>

| Name            | Type   | Description |
| --------------- | ------ | ----------- | 
| res.data    | object | Response for data |
| res.status  | number | Response for status code |
| res.statusText | string | Response for status message |
| res.limit | number | Response for data limit |
| res.skip | number | Response for data skip |
| res.error | object | Response for error occurred |

  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {FindGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="php" label="PHP" default>
    <CodeBlock className="language-jsx">
      {FindPHP}
    </CodeBlock>

### Response

| Name            | Type   | Description |
| --------------- | ------ | ----------- | 
| $res['data']    | object | Response for all data |
| $res['status']  | integer | Response for status code |
| $res['statusText'] | string | Response for status message |
| $res['limit']    | integer | Response for data limit |
| $res['skip']    | integer | Response for data skip |
| $res['error'] | object | Response for error occurred |

  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {FindApi}
    </CodeBlock>
  </TabItem>
</Tabs>

:::note

- By default Kontenbase will return a maximum of 100 records to prevent from malicious requests. 

:::

<!-- ## Examples

### Find All Data
```javascript
const { data, error } = await kontenbase.service('posts').find()
```

### Find Specific Fields
```javascript
const { data, error } = await kontenbase.service('posts')
    .find({select: ['title', 'description', 'image']})
```

### Find with Relation (Lookup)
```javascript
const { data, error } = await kontenbase.service('posts')
  .find({ lookup: ['categories', 'createdBy'] })
``` -->
