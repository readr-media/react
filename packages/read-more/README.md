# [@readr-media/read-more](https://www.npmjs.com/package/@readr-media/read-more) &middot; ![npm version](https://img.shields.io/npm/v/@readr-media/read-more.svg?style=flat)

## Feature

- 「延伸閱讀」共用元件。
- 根據螢幕寬度，自動調整文章排版形式。

<div align=left><img width="500" height="500" src="https://github.com/ChangRongXuan/react/blob/read-more/packages/read-more/read-more-example.png"/></div>

## How to Use This Pkg as React Component ?

1. Install the npm [package](https://www.npmjs.com/package/@readr-media/read-more)
   `yarn add @readr-media/read-more`
2. Import component in the desired place

```
import ReadMore from '@readr-media/read-more'

const data = [
  {
    id: 1,
    slug: 'post-slug-01',
    caption: '文章標題01',
    imageUrl: 'https://www.mirrormedia.com.tw',
    alt: '文章敘述01',
    link: 'https://www.mirrormedia.mg',
  },
  {
    id: 2,
    caption: '文章標題02',
    imageUrl: 'https://www.mirrormedia.com.tw',
    alt: '文章敘述02',
    link: 'https://www.mirrormedia.mg/projects/fifa2022/index.html',
  },
]

export default function ComponentName() {
  return (
    <ReadMore
      readMoreData={data}
      title="延伸閱讀"
      titleColor="#000000"
      titleSize="16px"
      captionColor="red"
      captionSize="30px"
      defaultImage="default-img.svg"
    />
  )
}
```

## Props

| 名稱           | 資料型別    | 必須  | 預設值              | 說明                                                                                                                                  |
| ------------ | ------- | --- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| readMoreData       | Array  | `V` | `[]` | 延伸閱讀文章資訊。範例： `[ { id: 1, slug: 'post-slug-01', caption: '文章標題01', imageUrl: 'https://www.mirrormedia.com.tw', alt: '文章敘述01', link: 'https://www.mirrormedia.mg' } ]` 。                                                               |
| title | String  |     | `"延伸閱讀"`           | 標題。                                                               |
| titleColor | String  |     | `"#ffffff"`             | 標題顏色。                                                                                                       |
| titleSize          | String  |     | `""`             | 標題尺寸（font-size)。                                                                                                                                |
| captionColor    | String  |     | `"#ffffff"`        | 文章標題顏色。                                                                                               |
| captionSize       | String  |     | `""`     | 文章標題尺寸（font-size)。                                                                                                                                |
| defaultImage        | String  |     | `""`         | 文章預設圖片。當`readMoreData`的`imageUrl`載入失敗時，則載入預設圖片。                                                                                                                                |

## Props Detail : readMoreData

### required
- `id`: required。文章 id。
- `caption`: required。文章標題。

### optional
- `slug`: optional。文章 slug，用於`https://www.mirrormedia.mg/story/${slug}/`作為文章連結。如無可選擇使用`link`作為文章連結資料。
- `imageUrl`: optional。文章圖片 URL。
- `alt`: optional。文章圖片替代文字。
- `link`: optional。文章連結。   

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
$ npm run build
// or
$ make build
```

### Build Webpack Bundles

```
$ make build-dist
```

### Transpile React, ES6 Codes to ES5

```
$ make build-lib
```

### NPM Publish

After executing `Build` scripts, we will have `./dist` and `/lib` folders,
and then we can execute publish command,

```
npm publish
```

Note: before publish npm package, we need to bump the package version first.

## TODOs

- [ ] 建立 CI pipeline，透過 CI 產生 npm package，並且上傳至 npm registry
- [ ] 透過 Lerna 控制 packages 之間的版號
