---
title: lookup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import LookupJs from '!!raw-loader!./snippets/lookup-js.md';
import LookupApi from '!!raw-loader!./snippets/lookup-api.md';
import LookupAllJs from '!!raw-loader!./snippets/lookup-all-js.md';
import LookupAllGo from '!!raw-loader!./snippets/lookup-all-go.md';
import LookupAllApi from '!!raw-loader!./snippets/lookup-all-api.md';
import LookupIdJs from '!!raw-loader!./snippets/lookup-id-js.md';
import LookupIdApi from '!!raw-loader!./snippets/lookup-id-api.md';

### Specific fields

Allows to pick which link to record fields to lookup.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {LookupJs}
    </CodeBlock>
  </TabItem>  
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {LookupApi}
    </CodeBlock>
  </TabItem>
</Tabs>

### All fields

Lookup to all link to record fields.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {LookupAllJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
      {LookupAllGo}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {LookupAllApi}
    </CodeBlock>
  </TabItem>
</Tabs>

### Show only id

Only show id in the lookup result.

<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {LookupIdJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[GET]">
      {LookupIdApi}
    </CodeBlock>
  </TabItem>
</Tabs>
