<div align="center">
  <a href="https://ohbug.net" target="_blank">
    <img src="https://raw.githubusercontent.com/ohbug-org/blog/master/images/ohbug_logo.svg" alt="Ohbug" height="72">
  </a>
  
  <p>An open source application information monitoring platform.</p>
</div>

# `@ohbug/extension-rrweb`

[![npm](https://img.shields.io/npm/v/@ohbug/extension-rrweb.svg?style=flat-square)](https://www.npmjs.com/package/@ohbug/extension-rrweb)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@ohbug/extension-rrweb?style=flat-square)](https://bundlephobia.com/result?p=@ohbug/extension-rrweb)

Package [rrweb](https://github.com/rrweb-io/rrweb), to "screen recording".

## Installation

```
pnpm i rrweb @ohbug/extension-rrweb
```

## Usage

```javascript
import Ohbug from '@ohbug/browser'
import OhbugExtensionRrweb from '@ohbug/extension-rrweb'

const client = Ohbug.setup({ apiKey: 'YOUR_API_KEY' })
client.use(OhbugExtensionRrweb)
```
