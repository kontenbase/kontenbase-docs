---
title: deleteById()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import DeleteByIdJs from '!!raw-loader!./snippets/delete-by-id-js.md';
import DeleteByIdGo from '!!raw-loader!./snippets/delete-by-id-go.md';
import DeleteByIdPHP from '!!raw-loader!./snippets/delete-by-id-php.md';
import DeleteByIdApi from '!!raw-loader!./snippets/delete-by-id-api.md';

Delete a record by id.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {DeleteByIdJs}
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
      {DeleteByIdGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="php" label="PHP" default>
    <CodeBlock className="language-jsx">
      {DeleteByIdPHP}
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
    <CodeBlock className="language-jsx" title="[DELETE]">
      {DeleteByIdApi}
    </CodeBlock>
  </TabItem>
</Tabs>
