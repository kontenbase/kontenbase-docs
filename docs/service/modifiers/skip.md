---
title: skip
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import SkipJs from '!!raw-loader!./snippets/skip-js.md';
import SkipApi from '!!raw-loader!./snippets/skip-api.md';

Skip the starting index of the rows.
<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {SkipJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {SkipApi}
    </CodeBlock>
  </TabItem>
</Tabs>
