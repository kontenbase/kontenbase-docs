---
title: Using Filters
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import UsingFiltersJs from '!!raw-loader!./snippets/using-filters-js.md';
import UsingFiltersApi from '!!raw-loader!./snippets/using-filters-api.md';

Filters can be used on select(), update(), and delete() queries.
<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {UsingFiltersJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {UsingFiltersApi}
    </CodeBlock>
  </TabItem>
</Tabs>
