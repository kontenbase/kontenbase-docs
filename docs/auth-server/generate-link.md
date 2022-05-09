---
title: generateLink()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import GenerateLinkJs from '!!raw-loader!./snippets/generate-link-js.md';
import GenerateLinkApi from '!!raw-loader!./snippets/generate-link-api.md';

Generates links to be sent via email or other. 
<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {GenerateLinkJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[POST]">
      {GenerateLinkApi}
    </CodeBlock>
  </TabItem>
</Tabs>

### Parameters
|Name   |Type  |Description       |
|-------|------|------------------|
|type (required)|string|The link type ("signup"/"magiclink"/"recovery"/"invite")|
|email (required)|string|The user email|

:::note

- This function should only be called on server

:::
