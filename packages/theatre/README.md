# [@readr-media/react-theatre](https://www.npmjs.com/package/@readr-media/react-theatre) &middot; ![npm version](https://img.shields.io/npm/v/@readr-media/react-theatre.svg?style=flat)

## Feature
- 與 [Theatre Editor](https://github.com/readr-media/react/tree/main/packages/theatre-editor) 搭配使用。先於 Editor 編輯後生成對應的一組「元件JSON」和「動畫JSON」後，透過 `@readr-media/react-theatre` 套件來將 JSON 轉為 Embedded-code。
<img width="1464" alt="截圖 2024-04-26 上午12 19 03" src="https://github.com/ChangRongXuan/react/assets/104489150/f2afdb66-e75a-433d-bd30-4c0498d2ecf9">

- 需傳入一組 `objectJson` + `animateJson`，如有傳入 `mobileObjectJson` 和 `mobileAnimateJson` 參數，可在手機螢幕寬度下，切換為讀取＆呈現 `mobileObjectJson` 和 `mobileAnimateJson` 的內容。（如無傳入 mobile JSON 則照常呈現 objectJson + animateJson 內容）

- 桌機＆手機內容切換尺寸，取決於： `mobileSize` 的數值，預設為 768px（＝ 低於 768px 時，如有傳入 `mobileObjectJson`、`mobileAnimateJson`，改使用 mobile JSON data）。目前開發上只有設定兩組尺寸的切換，未來可考慮是否提供更多尺寸切換的設定。
- `type` 參數用於設定 Embedded-code 呈現的方式為：(1) `scroll` = 透過捲動方式來播放內容 還是 (2) `video` = 自動播放內容。預設為透過捲動方式呈現內容。
## Props

| 名稱      | 資料型別          | 必須 | 預設值           | 說明                                                                                    |
| --------- | ----------------- | ---- | ---------------- | --------------------------------------------------------------------------------------- |
| objectJson | Array             | V     | `[]`      | 元件 JSON (Theatre Editor 生成）                                                     |
| animateJson | Object             | V     | `{}`     | 動畫 JSON (Theatre Editor 生成）                                                                  |
| mobileObjectJson | Array             |   |  `[]` | 手機 - 元件 JSON (Theatre Editor 生成）    |
| mobileAnimateJson   | Object  |      |  `{}`             | 手機 - 動畫 JSON (Theatre Editor 生成）   。                                                        |
| mobileSize   | number |      |         `768`         | 界定手機/桌機版本的切換螢幕寬度（單位:px) 。                                                             |
| type | string |      |            `"scroll"`      | `scroll` or `video`                                                  |

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
