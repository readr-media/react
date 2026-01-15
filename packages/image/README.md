# [@readr-media/react-image](https://www.npmjs.com/package/@readr-media/react-image) &middot; ![npm version](https://img.shields.io/npm/v/@readr-media/react-image.svg?style=flat)

## Feature

- 可傳入的多個圖片 URL，並依序載入。
- 可傳入參數`rwd`，決定不同螢幕寬度下的圖片。
- 可傳入參數`breakpoint`，修改螢幕寬度斷點。
- 嘗試依據參數`rwd`與 DPR（Device pixel ratio）偵測最適圖片，作為優先載入的對象（詳見「關於「抓取最適圖片」的設計限制」）。
- 當特定圖片載入成功時，則顯示該圖片；當特定圖片載入失敗時，則載入更大尺寸的圖片。
- 當所有圖片 URL 皆載入失敗時，載入預設圖片。
- 實作圖片載入動畫效果。
- 實作圖片 preload 或 lazy load。
- 可傳入參數`fetchPriority`，指定圖片抓取的優先順序。

## How to Use This Pkg as React Component ?

1. Install the npm [package](https://www.npmjs.com/package/@readr-media/react-image)
   `yarn add @readr-media/react-image`
2. Import component in the desired place

```
import CustomImage from '@readr-media/react-image'
const IMAGES_URL = { w480: "480.png", w800: "w800.png", original: "original.png"}
export default function SomeComponent() {
  return (
    <div>
      <OtherComponent/>

       <Image
          images={IMAGES_URL}
          rwd={{
            mobile: '320px',
            tablet: '244px',
            laptop: '500px',
            desktop: '1200px',
            default: '1600px'
          }}
        ></Image>

    </div>
  )
}
```

## Props

| 名稱                        | 資料型別 | 必須 | 預設值                                                                                     | 說明                                                                                                                                                                                    |
| --------------------------- | -------- | ---- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| images                      | Object   | `V`  | `{original: ""}`                                                                           | 圖片設定，範例： `{ w400: '400.png', w800: '800.png', w1200: '1200.png', original: 'original.png' }`。圖片載入順序詳見 [Sequence of Loading Images](##sequence-of-loading-images)。     |
| imagesWebP                  | Object   |      | `null`                                                                                     | 圖片設定，範例： `{ w400: '400.webp', w800: '800.webp', w1200: '1200.webp', original: 'original.webp' }`。圖片載入順序詳見 [Sequence of Loading Images](##sequence-of-loading-images)。 |
| defaultImage                | String   |      | `""`                                                                                       | 預設圖片。當`image`皆載入失敗時，則載入預設圖片。<br>當`loadingImage`未傳入時，則以預設圖片作為圖片載入動畫效果。                                                                       |
| loadingImage                | String   |      | `""`                                                                                       | 載入動畫效果，作為載入圖片的動畫。目前僅接受圖片檔 URL。                                                                                                                                |
| alt                         | String   |      | `""`                                                                                       | 替代文字                                                                                                                                                                                |
| objectFit                   | String   |      | `"cover"`                                                                                  | 圖片區塊填滿設定，即為 CSS property `object-fit`                                                                                                                                        |
| height                      | String   |      | `"100%"`                                                                                   | 圖片高度                                                                                                                                                                                |
| width                       | String   |      | `"100%"`                                                                                   | 圖片寬度                                                                                                                                                                                |
| rwd                         | Object   |      | `{mobile: '100vw', tablet: '100vw', laptop: '100vw', desktop: '100vw', default: '100vw' }` | 不同螢幕寬度斷點下的圖片尺寸。                                                                                                                                                          |
| breakpoint                  | Object   |      | `{ mobile: '767px', tablet: '1199px', laptop: '1439px', desktop: '2439px', }`              | 螢幕寬度斷點。 搭配 rwd，可以組出不同螢幕寬度斷點下的圖片尺寸。                                                                                                                         |
| debugMode                   | boolean  |      | `false`                                                                                    | 是否開啟開發模式，若開啟，則在載入圖片成功或失敗時，透過`console.log`顯示相關訊息                                                                                                       |
| priority                    | boolean  |      | `false`                                                                                    | 設定圖片是否優先載入。若為 `true`，則會強制 `rel="preload"`、`fetchPriority="high"`、`loading="eager"`，且 SSR 時會直接渲染真實圖片網址，並不顯示模糊濾鏡與載入動畫。 |
| intersectionObserverOptions | Object   |      | `{root: null, rootMargin: '0px', threshold: 0.25, }`                                       | intersection observer 的選項，用於調整圖片懶載入的條件。僅在參數`priority`為`false`的情況才會生效                                                                                       |
| fetchPriority               | String   |      | `"auto"`                                                                                   | 指示資源的抓取優先級。可能的值為 "high"、"low" 和 "auto"。當 `priority` 為 `true` 時，此設定將被忽略並強制為 `"high"`。                                                                |
| loading                     | String   |      | `"lazy"`                                                                                   | 指示瀏覽器如何載入圖片。可能的值為 "lazy" 和 "eager"。當 `priority` 為 `true` 時，此設定將被忽略並強制為 `"eager"`。                                                                   |

## Sequence of Loading Images

以下列出的是完整的圖片候選名單與其預設的 fallback 順序。元件會嘗試從中最適合的一張開始載入，若失敗則依此順序往後嘗試。

- 當只有傳入 `images` 時，會依據解析度由小至大載入。
- 如果同時有傳入 `images` 與 `imagesWebP` 時，會依據解析度由小至大載入，若解析度相同，則 webP 圖片優先載入。

舉例來說，若僅有傳入 `images`，且傳入的 `images` 為：

```
{
      original: 'original.png',
      w480: 'w480.png',
      w800: 'w800.png',
      w1600: 'w1600.png',
      w2400: 'w2400.png',
}
```

圖片載入順序為 `w480.png` -> `w800.png` -> `w1600.png` -> `w2400.png` -> `original.png`。

如果除了傳入上述 `images` ，亦有傳入 `imagesWebP`，且傳入的 `imagesWebP` 為：

```
{
      original: 'original.webp',
      w480: 'w480.webp',
      w800: 'w800.webp',
      w1600: 'w1600.webp',
      w2400: 'w2400.webp',
},
```

圖片載入順序為 `w480.webp` -> `w480.png` -> `w800.webp` -> `w800.png` -> `w1600.webp` ->`w1600.png` -> `w2400.webp` -> `w2400.png` -> `original.webp` -> `original.png`。

## 關於「抓取最適圖片」的設計限制

本元件的運作機制是：在實際渲染前，先建立一個不掛載到 DOM 的 `Image()` 物件，並設定 `srcset` 與 `sizes`，利用瀏覽器的原生機制來讓瀏覽器依據當前環境選出對應的圖片 URL（即 `currentSrc`）。此結果僅作為序列載入的起始提示；最終渲染在畫面上的 `<img>` 只會使用一個已驗證可成功載入的 `src`，以確保顯示的穩定性。

然而，此偵測機制有以下限制：

1.  **依賴準確的 sizes 設定**：探測的準確度完全取決於傳入的 `sizes` 屬性是否符合真實渲染寬度。若 `sizes` 設定不準確或版面發生位移，瀏覽器可能會選擇不理想的圖片尺寸。
2.  **額外的預載流程**：此偵測機制引入了額外的工作階段。在快取未命中的情境下（如停用快取或首次載入），可能會造成額外的網路請求或輕微的延遲。
3.  **環境差異**：在非標準瀏覽器環境（例如 SSR 測試執行器如 jsdom）中，此探測行為可能無法正常運作或行為不同。因此本元件始終保留依序嘗試載入的 fallback 機制，確保最終仍能顯示圖片。

## Precautions

若使用該套件時，禁用了瀏覽器的 cache，則同張圖片會載入至少兩次（一次在函式`loadImage()`中載入各個大小的圖片，一次則在 useEffect 中，將成功載入的圖片掛載至`<img>`上），這是正常的現象。
之所以要分載入兩次，而不是在`loadImage()`中嘗試載入圖片並掛載至`<img>`，是因為這樣才能在圖片載入時顯示`loadingImage`。

若無禁用瀏覽器快取，則僅會載入一次圖片。

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

## Build

Transpile React, ES6 Codes to ES5, and generate two module system (ES module and Commonjs) at the same time

```
$ npm run build
// or
$ make build
// or
$ make build-lib
```

### NPM Publish

After executing `Build` scripts, we will have `/lib` folders,
and then we can execute publish command,

```
npm publish
```

Note: before publish npm package, we need to bump the package version first.

### Folder Structure of Build File

```
@readr-media/react-image
  |
  ├──lib
  |    └── cjs    // for CommonJS project
  |    └── esm    // for ES Modules project
  |    └── types  // for Typescript
  |
  ├── README.md
  ├── CHANGELOG.md
  └── package.json
```

Note:

- If your Node.js project has enable ES Modules, it will use file in `/esm` folder when import this package.
- If not, it will use file in `/cjs` folder when import this package.
- See [Node.js Documentation](https://nodejs.org/api/esm.html#modules-ecmascript-modules) to get more info about ES Modules.

## TODOs

- [ ] 建立 CI pipeline，透過 CI 產生 npm package，並且上傳至 npm registry
- [ ] 透過 Lerna 控制 packages 之間的版號
- [ ] 在禁用瀏覽器的快取情況下，仍僅需載入圖片一次。
