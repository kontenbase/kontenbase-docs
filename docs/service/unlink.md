---
title: unlink()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import UnlinkJs from '!!raw-loader!./snippets/unlink-js.md';
import UnlinkGo from '!!raw-loader!./snippets/unlink-go.md';
import UnlinkPHP from '!!raw-loader!./snippets/unlink-php.md';
import UnlinkApi from '!!raw-loader!./snippets/unlink-api.md';

Unlink an existing record to a destinated related record on other service.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {UnlinkJs}
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
      {UnlinkGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="php" label="PHP" default>
    <CodeBlock className="language-jsx">
      {UnlinkPHP}
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
    <CodeBlock className="language-jsx" title="[UNLINK]">
      {UnlinkApi}
    </CodeBlock>
  </TabItem>
</Tabs>
