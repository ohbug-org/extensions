<div align="center">
  <a href="https://ohbug.net" target="_blank">
    <img src="https://raw.githubusercontent.com/ohbug-org/blog/master/images/ohbug_logo.svg" alt="Ohbug" height="72">
  </a>
  
  <p>An open source application information monitoring platform.</p>
</div>

# `@ohbug/extension-uuid`

[![npm](https://img.shields.io/npm/v/@ohbug/extension-uuid.svg?style=flat-square)](https://www.npmjs.com/package/@ohbug/extension-uuid)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@ohbug/extension-uuid?style=flat-square)](https://bundlephobia.com/result?p=@ohbug/extension-uuid)

## Installation

```
pnpm i @ohbug/extension-uuid
```

## Usage

```javascript
import Ohbug from '@ohbug/browser'
import OhbugExtensionUUID from '@ohbug/extension-uuid'

const client = Ohbug.setup({ apiKey: 'YOUR_API_KEY' })
client.use(OhbugExtensionUUID())
```
