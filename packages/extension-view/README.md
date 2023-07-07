<div align="center">
  <a href="https://ohbug.net" target="_blank">
    <img src="https://raw.githubusercontent.com/ohbug-org/blog/master/images/ohbug_logo.svg" alt="Ohbug" height="72">
  </a>
  
  <p>An open source application information monitoring platform.</p>
</div>

# `@ohbug/extension-view`

[![npm](https://img.shields.io/npm/v/@ohbug/extension-view.svg?style=flat-square)](https://www.npmjs.com/package/@ohbug/extension-view)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@ohbug/extension-view?style=flat-square)](https://bundlephobia.com/result?p=@ohbug/extension-view)

Ohbug extension to collect view data

## Installation

```
pnpm i @ohbug/extension-view
```

## Usage

```javascript
import Ohbug from '@ohbug/browser'
import OhbugExtensionView from '@ohbug/extension-view'

const client = Ohbug.setup({ apiKey: 'YOUR_API_KEY' })
client.use(OhbugExtensionView())
```
