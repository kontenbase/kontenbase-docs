---
title: where
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import WhereJs from '!!raw-loader!./snippets/where-js.md';
import WhereGo from '!!raw-loader!./snippets/where-go.md';
import WherePHP from '!!raw-loader!./snippets/where-php.md';
import WhereApi from '!!raw-loader!./snippets/where-api.md';

Find all records that match all of the given criteria.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {WhereJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {WhereGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="php" label="PHP" default>
    <CodeBlock className="language-jsx">
      {WherePHP}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {WhereApi}
    </CodeBlock>
  </TabItem>
</Tabs>
