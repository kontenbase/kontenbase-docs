---
title: sendMobileOTP()
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import SendMobileOtpJs from '!!raw-loader!./snippets/send-mobile-otp-js.md';
import SendMobileOtpApi from '!!raw-loader!./snippets/send-mobile-otp-api.md';

Sends a mobile OTP via SMS. Will register the account if it doesn't already exist
<Tabs>
  <TabItem value="javascript" label="Javascript" default>
    <CodeBlock className="language-jsx">
      {SendMobileOtpJs}
    </CodeBlock>
  </TabItem>
  <TabItem value="API" label="API">
    <CodeBlock className="language-jsx" title="[POST]">
      {SendMobileOtpApi}
    </CodeBlock>
  </TabItem>
</Tabs>

## Parameters
|Name   |Type  |Description       |
|-------|------|------------------|
|phoneNumber (required)|string|The user's phone number WITH international prefix|

## Note
- This function should only be called on server
