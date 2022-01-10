---
title: unlink()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import UnlinkJs from '!!raw-loader!./snippets/unlink-js.md';
import UnlinkApi from '!!raw-loader!./snippets/unlink-api.md';

Unlink an existing record to a destinated related record on other service.
<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {UnlinkJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[POST]">
      {UnlinkApi}
    </CodeBlock>
  </TabItem>
</Tabs>
