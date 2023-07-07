<div align="center">
  <a href="https://ohbug.net" target="_blank">
    <img src="https://raw.githubusercontent.com/ohbug-org/blog/master/images/ohbug_logo.svg" alt="Ohbug" height="72">
  </a>
  
  <p>An open source application information monitoring platform.</p>
</div>

# `@ohbug/extension-feedback`

[![npm](https://img.shields.io/npm/v/@ohbug/extension-feedback.svg?style=flat-square)](https://www.npmjs.com/package/@ohbug/extension-feedback)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@ohbug/extension-feedback?style=flat-square)](https://bundlephobia.com/result?p=@ohbug/extension-feedback)

Ohbug extension to collect user feedback

## Installation

```
pnpm i @ohbug/extension-feedback
```

## Usage

```javascript
import Ohbug from '@ohbug/browser'
import OhbugExtensionFeedback from '@ohbug/extension-feedback'

const client = Ohbug.setup({ apiKey: 'YOUR_API_KEY' })
client.use(OhbugExtensionFeedback())
```

## Parameters

### target?: HTMLElement

You can customize the dom element to which the feedback popup is mounted, by default it will be mounted in the body.

example:

```javascript
import Ohbug from '@ohbug/browser'
import OhbugExtensionFeedback from '@ohbug/extension-feedback'

const client = Ohbug.setup({ apiKey: 'YOUR_API_KEY' })
client.use(OhbugExtensionFeedback(document.querySelector('#xxx')))
```
