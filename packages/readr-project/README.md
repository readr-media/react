# [@readr-media/readr-project](https://www.npmjs.com/package/@readr-media/readr-project) &middot; ![npm version](https://img.shields.io/npm/v/@readr-media/readr-project.svg?style=flat)

## Feature - Readr Site/Project 共用元件

`readr-project` 整理了 [Readr](https://www.readr.tw/) 網站與專題頁面共同會使用到的元件，詳細使用方式可參閱各元件的 README.md。

- Readr Logo: see [src/readr-logo](https://github.com/ChangRongXuan/react/tree/readr-project/packages/readr-project/src/readr-logo)。
- 社群分享按鈕: see [src/share-button](https://github.com/ChangRongXuan/react/tree/readr-project/packages/readr-project/src/share-button)。
- 贊助按鈕: see [src/donate-button](https://github.com/ChangRongXuan/react/tree/readr-project/packages/readr-project/src/donate-button)。
- 訂閱電子報按鈕: see [src/subscribe-button](https://github.com/ChangRongXuan/react/tree/readr-project/packages/readr-project/src/subscribe-button)。
- 相關報導/最新報導: see [src/related-post](https://github.com/ChangRongXuan/react/tree/readr-project/packages/readr-project/src/related-post)。

## How to Use This Pkg?

1. Install the npm [package](https://www.npmjs.com/package/@readr-media/icon)
   `yarn add @readr-media/readr-project`
2. Import component in the desired place

```
import {
  ReadrLogo,
  DonateButton,
  SubscribeButton,
  RelatedPost,
  ShareButton,
} from '@readr-media/readr-project'

export default function SomeComponent() {

  return (
  <>
    <div className="header">
      <ReadrLogo />
      <ShareButton />
    </div>

    <SubscribeButton />
    <DonateButton />

    <div className="report">
      <RelatedPost />
    </div>
  </>
  )
}
```

## Installation

`yarn install`

## Development

```
$ yarn dev
// or
$ npm run dev
// or
$ make dev
```

## Build (Webpack Bundles and ES5 Transpiling)

```
$ yarn build
// or
$ npm run build
// or
$ make build
```

### Transpile React, ES6 Codes to ES5

```
$ make build-lib
```

### NPM Publish

After executing `Build` scripts, we will have `/lib` folders,
and then we can execute publish command,

```
npm publish
```

Note: before publish npm package, we need to bump the package version first.

## TODOs

- [ ] 建立 CI pipeline，透過 CI 產生 npm package，並且上傳至 npm registry
- [ ] 透過 Lerna 控制 packages 之間的版號
