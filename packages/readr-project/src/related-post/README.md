# Related Post / 相關報導

## Feature

- 元件功能

  - 自動根據螢幕寬度 & 文章數量，調整文章排版形式。
  - 點按文章圖片 or 文章標題，可另開分頁至該文章頁面。
  - 如文章時間為當年度文章，則僅顯示月份與日期，不顯示年份。

- 使用設計

  - 需傳入文章資訊 `relatedData`。
  - 可傳入 `title`，指定標題文字。
  - 可傳入 `highlightColor`，設定標題文字的 highlight 顏色。
  - 可傳入 `defaultImage`，指定文章預設圖片。（當圖片無法正常顯示時，改為顯示此預設圖片）
  - 可設定 `debugMode`為 true，於開發環境下查看 error message。( 預設為 false )
  - 使用者可傳入 `className` 或使用 `titleClassName/captionClassName` 變更標題/文章標題樣式。

![Related Post](https://github.com/ChangRongXuan/Portfolio/blob/main/imgs/related-post.png)

## How to Use This React Component ?

1. Install the npm [package](https://www.npmjs.com/package/@readr-media/readr-project)
   `yarn add @readr-media/readr-project`
2. Import component in the desired place

```
import RelatedPost from '@readr-media/readr-project'

const data = [
  {
    id: 1,
    slug: 'post-slug-01',
    caption: '文章標題 01',
    imageUrl: 'https://www.mirrormedia.com.tw',
    alt: '文章敘述 01',
    link: 'https://www.mirrormedia.mg',
  }
]

export default function ComponentName() {
  return (
    <RelatedPost
      relatedData={data}
      title="延伸閱讀"
      highlightColor="red"
      titleClassName="title"
      captionClassName="caption"
      defaultImage="default-img.svg"
      debugMode={true}
    />
  )
}
```

## Props

| 名稱             | 資料型別 | 必須 | 預設值       | 說明                                                                                                                                                                                        |
| ---------------- | -------- | ---- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| readMoreData     | Array    | `V`  | `[]`         | 延伸閱讀文章資訊。範例：`[ { id: 1, slug: 'post-slug-01', caption: '文章標題 01', imageUrl: 'https://www.mirrormedia.com.tw', alt: '文章敘述 01',link: 'https://www.mirrormedia.mg' } ]` 。 |
| title            | String   |      | `"相關報導"` | 標題。                                                                                                                                                                                      |
| titleClassName   | String   |      | `""`         | 指定標題 className，可用於變更標題樣式。預設 className 為：`related-post-title`。                                                                                                           |
| captionClassName | String   |      | `""`         | 指定文章標題 className，可用於變更文章標題樣式。預設 className 為：`related-post-caption`。                                                                                                 |
| highlightColor   | String   |      | `""`         | 設定標題文字的 highlight 顏色。                                                                                                                                                             |
| debugMode        | Boolean  |      | `"false"`    | 是否開啟開發模式。若開啟，可於開發環境下透過 `console.log` 顯示相關訊息。                                                                                                                   |  |  |  |
| defaultImage     | String   |      | `""`         | 文章預設圖片。當 `relatedData` 的 `imageUrl` 載入失敗時，則載入預設圖片。                                                                                                                   |

## Props Detail : readMoreData

### required

- `id`: 文章 id。
- `caption`: 文章標題。

### optional

- `slug`: 文章 slug，用於`https://www.readr.tw//story/${slug}/`作為文章連結。如無可選擇使用`link`作為文章連結資料。
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
$ yarn build
// or
$ npm run build
// or
$ make build
```

### Transpile React, ES6 Codes to ES5

```
make build-lib
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
- [ ] 實作圖片 lazy-load ，或 import `react-image`
