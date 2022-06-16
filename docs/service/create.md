---
title: create()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import CreateJs from '!!raw-loader!./snippets/create-js.md';
import CreateGo from '!!raw-loader!./snippets/create-go.md';
import CreatePHP from '!!raw-loader!./snippets/create-php.md';
import CreateApi from '!!raw-loader!./snippets/create-api.md';

Create a record.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {CreateJs}
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
      {CreateGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="php" label="PHP" default>
    <CodeBlock className="language-jsx">
      {CreatePHP}
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
    <CodeBlock className="language-jsx" title="[POST]">
      {CreateApi}
    </CodeBlock>
  </TabItem>
</Tabs>
