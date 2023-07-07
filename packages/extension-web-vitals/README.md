<div align="center">
  <a href="https://ohbug.net" target="_blank">
    <img src="https://raw.githubusercontent.com/ohbug-org/blog/master/images/ohbug_logo.svg" alt="Ohbug" height="72">
  </a>
  
  <p>An open source application information monitoring platform.</p>
</div>

# `@ohbug/extension-web-vitals`

[![npm](https://img.shields.io/npm/v/@ohbug/extension-web-vitals.svg?style=flat-square)](https://www.npmjs.com/package/@ohbug/extension-web-vitals)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@ohbug/extension-web-vitals?style=flat-square)](https://bundlephobia.com/result?p=@ohbug/extension-web-vitals)

Ohbug extension to collect performance information

## Installation

```
pnpm i web-vitals @ohbug/extension-web-vitals
```

## Usage

```javascript
import Ohbug from '@ohbug/browser'
import OhbugExtensionWebVitals from '@ohbug/extension-web-vitals'

const client = Ohbug.setup({ apiKey: 'YOUR_API_KEY' })
client.use(OhbugExtensionWebVitals())
```
