# [@readr-media/project](https://www.npmjs.com/package/@readr-media/project) &middot; ![npm version](https://img.shields.io/npm/v/@readr-media/project.svg?style=flat)

## Feature

`project` 整理了 [Readr](https://www.readr.tw/)、[MirrorWeekly](https://www.mirrormedia.mg/) (鏡週刊）、[MirrorTV](https://www.mnews.tw/) (鏡電視）網站/靜態專題之共用元件，詳細使用方式可參閱各元件的 README.md。

### MirrorWeekly： `src/weekly`

- 鏡週刊 Logo：see [/weekly-logo](https://github.com/readr-media/react/tree/main/packages/project/src/weekly/weekly-logo)。
- 延伸閱讀: see [/related-post](https://github.com/readr-media/react/tree/main/packages/project/src/weekly/related-post)。
- 社群分享按鈕: see [/share-button](https://github.com/readr-media/react/tree/main/packages/project/src/weekly/share-button)。

### MirrorTV： `src/tv`

- 鏡電視 Logo : see [/tv-logo](https://github.com/readr-media/react/tree/main/packages/project/src/tv/tv-logo)。

### Readr： `src/readr`

- Readr Logo: see [/readr-logo](https://github.com/readr-media/react/tree/main/packages/project/src/readr/readr-logo)。
- 贊助按鈕: see [/donate-button](https://github.com/readr-media/react/tree/main/packages/project/src/readr/donate-button)。
- 訂閱電子報按鈕: see [/subscribe-button](https://github.com/readr-media/react/tree/main/packages/project/src/readr/subscribe-button)。
- 相關報導: see [/related-report](https://github.com/readr-media/react/tree/main/packages/project/src/readr/related-report)。

## How to Use This Pkg?

1. Install the npm [package](https://www.npmjs.com/package/@readr-media/project)
   `yarn add @readr-media/project`
2. Import component in the desired place

```
import styled from 'styled-components'

import { DonateButton, ReadrLogo, SubscribeButton, RelatedReport } from '@readr-media/project/readr'
import { TVLogo } from '@readr-media/project/tv'
import { RelatedPost, ShareButton, WeeklyLogo } from '@readr-media/project/weekly'

const mockData = [
  {
    id: 1,
    slug: 'test01',
    caption: '【寵粉速報】5元就能訂閱「鏡週刊會員制」',
    imageUrl:
      'https://www.mirrormedia.com.tw/assets/images/20221017214008-027f6c46502e220dd63521d758ef95e6.jpg',
    alt: 'alt測試1',
    date: '2021-02-08T07:00:00.000Z',
    time: 5
  },
]

const Header = styled.div`
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`

export default function SomeComponent() {

  return (
  <>
    <div className="mirror-weekly-container">
      <Header>
        <MirrorMediaLogo />
        <ShareButton />
      </Header>

      <RelatedPost relatedData={mockData} />
    </div>

    <div className="mirror-tv-container">
      <MirrorTVLogo />
    </div>

    <div className="readr-container">
      <Header>
        <ReadrLogo />
      </Header>

      <SubscribeButton />
      <DonateButton />
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
