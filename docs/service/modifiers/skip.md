---
title: skip
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import SkipJs from '!!raw-loader!./snippets/skip-js.md';
import SkipGo from '!!raw-loader!./snippets/skip-go.md';
import SkipApi from '!!raw-loader!./snippets/skip-api.md';

Skip the starting index of the records.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {SkipJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {SkipGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {SkipApi}
    </CodeBlock>
  </TabItem>
</Tabs>
