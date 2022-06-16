---
title: unlink()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import UnlinkJs from '!!raw-loader!./snippets/unlink-js.md';
import UnlinkGo from '!!raw-loader!./snippets/unlink-go.md';
import UnlinkApi from '!!raw-loader!./snippets/unlink-api.md';

Unlink an existing record to a destinated related record on other service.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {UnlinkJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {UnlinkGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[UNLINK]">
      {UnlinkApi}
    </CodeBlock>
  </TabItem>
</Tabs>
