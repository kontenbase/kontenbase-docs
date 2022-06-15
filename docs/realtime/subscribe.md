---
title: subscribe()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import SubscribeJs from '!!raw-loader!./snippets/subscribe-js.md';
import SubscribeGo from '!!raw-loader!./snippets/subscribe-go.md';

Subscribe to realtime changes in your service.

<Tabs>        
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
        {SubscribeJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="go" label="Go" default>
    <CodeBlock className="language-jsx">
        {SubscribeGo}
    </CodeBlock>
  </TabItem>
</Tabs>

### Parameters

<Tabs>        
  <TabItem value="javascript" label="Javascript" default>
    <table>
      <tr style={{ fontWeight :"bold" }}>
        <td>Name</td>
        <td>Type</td>
        <td>Required</td>
        <td>Description</td>
      </tr>
      <tr>
        <td>serviceName</td>
        <td>string</td>
        <td>true</td>
        <td>The service name to be subscribed</td>
      </tr>
      <tr>
        <td>condition</td>
        <td>object</td>
        <td>true</td>
        <td>Condition consists of event and where</td>
      </tr>
      <tr>
        <td>condition.event</td>
        <td>string</td>
        <td>true</td>
        <td>The event can be <code>*</code>, <code>CREATE_RECORD</code>, <code>UPDATE_RECORD</code>, <code>DELETE_RECORD</code></td>
      </tr>
      <tr>
        <td>condition.where</td>
        <td>object</td>
        <td>false</td>
        <td>Refering to filters docs</td>
      </tr>
    </table>
  </TabItem>  
  <TabItem value="go" label="Go" default>  
      <table>      
      <tr style={{ fontWeight :"bold" }}>
        <td>Name</td>
        <td>Type</td>
        <td>Required</td>
        <td>Description</td>
      </tr>
      <tr>
        <td>serviceName</td>
        <td>string</td>
        <td>true</td>
        <td>The service name to be SubscribeOptions</td>
      </tr>
      <tr>
        <td>SubscribeOptions</td>
        <td>struct</td>
        <td>true</td>
        <td>Subscribe Options consists of <code>Event</code>, <code>Where</code>, <code>OnMessage</code>, and <code>OnError</code></td>
      </tr>
      <tr>
        <td>SubscribeOptions.Event</td>
        <td>string</td>
        <td>true</td>
        <td>The event can be <code>RealtimeAll</code>, <code>RealtimeCreate</code>, <code>RealtimeUpdate</code>, <code>RealtimeDelete</code>, <code>RealtimeError</code></td>
      </tr>
      <tr>
        <td>SubscribeOptions.Where</td>
        <td>interface</td>
        <td>false</td>
        <td>Refering to filters docs</td>
      </tr>
      <tr>
        <td>SubscribeOptions.OnMessage</td>
        <td>callback</td>
        <td>false</td>
        <td>Callback when receiving the message</td>
      </tr>
      <tr>
        <td>SubscribeOptions.OnError</td>
        <td>callback</td>
        <td>false</td>
        <td>Callback when an error occurred</td>
      </tr>
    </table>
  </TabItem>
</Tabs>