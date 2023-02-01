# [@readr-media/related-post](https://www.npmjs.com/package/@readr-media/related-post) &middot; ![npm version](https://img.shields.io/npm/v/@readr-media/related-post.svg?style=flat)

## Feature

實作「相關文章」元件：
- 元件功能 ( [設計稿](https://www.figma.com/file/THsuSHoWGuqQpBH5m6spAr/%E9%B3%A5%E9%A1%9E%E6%93%BA%E6%8B%8D?node-id=514%3A682&t=61hkD102o2wL7Kqf-0) )
   - 自動根據螢幕寬度 & 文章數量，調整文章排版形式。
   - 點按文章圖片 or 文章標題，可另開分頁至該文章頁面。
   - 文章標題超過特定行數，會截斷並以「...」呈現。（手機/平板：標題最多2行 ; 桌機：標題最多3行）
   
- 使用設計
   - 使用者可傳入 `title`，指定標題文字。
   - 使用者可傳入 `defaultImage`，指定文章預設圖片。
   - 使用者可設定 `debugMode`為 true，於開發環境下查看 error message。( 預設為 false )
   - 使用者可傳入 `className` 或使用 `default title/caption className` 變更標題/文章標題樣式。

<div align=left><img width="500" height="500" src="https://github.com/ChangRongXuan/react/blob/read-more/packages/read-more/read-more-example.png"/></div>

## How to Use This Pkg as React Component ?

1. Install the npm [package](https://www.npmjs.com/package/@readr-media/related-post)
   `yarn add @readr-media/related-post`
2. Import component in the desired place

```
import RelatedPost from '@readr-media/related-post'

const data = [
  {
    id: 1,
    slug: 'post-slug-01',
    caption: '文章標題01',
    imageUrl: 'https://www.mirrormedia.com.tw',
    alt: '文章敘述01',
    link: 'https://www.mirrormedia.mg',
  }
]

export default function ComponentName() {
  return (
    <RelatedPost
      relatedData={data}
      title="延伸閱讀"
      titleClassName="title"
      captionClassName="caption"
      defaultImage="default-img.svg"
      debugMode={true}
    />
  )
}
```

## Props

| 名稱           | 資料型別    | 必須  | 預設值              | 說明                                                                                                                                  |
| ------------ | ------- | --- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| readMoreData       | Array  | `V` | `[]` | 延伸閱讀文章資訊。範例： `[ { id: 1, slug: 'post-slug-01', caption: '文章標題01', imageUrl: 'https://www.mirrormedia.com.tw', alt: '文章敘述01', link: 'https://www.mirrormedia.mg' } ]` 。                                                               |
| title | String  |     | `"延伸閱讀"`           | 標題。                                                               |      
| titleClassName | String  |     | `""`           | 指定標題className，可用於變更標題樣式。或直接使用預設className：`related-post-title`。                                                                 |       
| captionClassName | String  |     | `""`           | 指定文章標題className，可用於變更文章標題樣式。或直接使用預設className：`related-post-caption`。                                                            |       
| debugMode | Boolean  |     | `"false"`           | 是否開啟開發模式。若開啟，可於開發環境下透過`console.log`顯示相關訊息。                                                             |                                                                                                                             |                                                                                        |                                                                                                                             |
| defaultImage        | String  |     | `""`         | 文章預設圖片。當`readMoreData`的`imageUrl`載入失敗時，則載入預設圖片。                                                                                                                                |

## Props Detail : readMoreData

### required
- `id`: 文章 id。
- `caption`: 文章標題。

### optional
- `slug`: 文章 slug，用於`https://www.mirrormedia.mg/story/${slug}/`作為文章連結。如無可選擇使用`link`作為文章連結資料。
- `imageUrl`: 文章圖片 URL。
- `alt`: 文章圖片替代文字。
- `link`: 文章連結。   

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
