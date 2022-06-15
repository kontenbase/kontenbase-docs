---
title: unsubscribe()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import UnSubscribeJs from '!!raw-loader!./snippets/unsubscribe-js.md';
import UnSubscribeGo from '!!raw-loader!./snippets/unsubscribe-go.md';

Unsubscribe to realtime changes in your service.

<Tabs>        
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
        {UnSubscribeJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
        {UnSubscribeGo}
    </CodeBlock>
  </TabItem>
</Tabs>