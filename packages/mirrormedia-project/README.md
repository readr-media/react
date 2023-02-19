# [@readr-media/mirrormedia-project](https://www.npmjs.com/package/@readr-media/mirrormedia-project) &middot; ![npm version](https://img.shields.io/npm/v/@readr-media/mirrormedia-project.svg?style=flat)

## Feature - MirrorMedia Site/Project 共用元件

`mirrormedia-project` 整理了 [MirrorMedia](https://www.mirrormedia.mg/) (鏡週刊/鏡電視）網站與專題頁面共同會使用到的元件，詳細使用方式可參閱各元件的 README.md。

- MirrorMediaLogo : see [src/mirror-media-logo](https://github.com/ChangRongXuan/react/tree/readr-project/packages/readr-project/src/mirror-media-logo)。
- MirrorTVLogo: see [src/mirror-tv-logo](https://github.com/ChangRongXuan/react/tree/readr-project/packages/readr-project/src/mirror-tv-logo)。
- 延伸閱讀/相關報導: see [src/related-post](https://github.com/ChangRongXuan/react/tree/readr-project/packages/readr-project/src/related-post)。
- 社群分享按鈕: see [src/share-button](https://github.com/ChangRongXuan/react/tree/readr-project/packages/readr-project/src/share-button)。

## How to Use This Pkg?

1. Install the npm [package](https://www.npmjs.com/package/@readr-media/icon)
   `yarn add @readr-media/mirrormedia-project`
2. Import component in the desired place

```
import {
  MirrorMediaLogo,
  MirrorTVLogo,
  RelatedPost,
  ShareButton,
} from '@readr-media/mirrormedia-project'

const mockData = [
  {
    id: 1,
    slug: 'test01',
    caption: '【寵粉速報】5元就能訂閱「鏡週刊會員制」',
    imageUrl:
      'https://www.mirrormedia.com.tw/assets/images/20221017214008-027f6c46502e220dd63521d758ef95e6.jpg',
    alt: 'alt測試1',
  },
]

export default function SomeComponent() {

  return (
  <>
    <div className="header">
      <MirrorMediaLogo />
      <MirrorTVLogo />
      <ShareButton />
    </div>

    <RelatedPost relatedData={mockData} />
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
