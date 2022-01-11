---
title: Installation
---

Kontenbase SDK could be installed whether on Client Side Javascript such as Vanilla Js, React, Vue, etc, and also Server Side Javascript such as Node Js.

## Javascript

### Via NPM
```
npm install --save @kontenbase/sdk
```

**Usage**

Configure package with your account's API key obtained from your Kontenbase Dashboard.

```javascript
const { KontenbaseClient } = require('@kontenbase/sdk')

const kontenbase = new KontenbaseClient({
  apiKey: 'YOUR_API_KEY',
})
```

### Via CDN
```
<script src="https://cdn.jsdelivr.net/npm/@kontenbase/sdk"></script>
```

