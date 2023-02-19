# Share-Button / 社群分享按鈕

## Feature

- 可傳入 `color`，調整 Button 顏色。
- 可傳入 `size`，調整 Button 尺寸（ 寬高比 1:1 ）。
- 可傳入 `direction`，調整展開方向（ vertical / horizon )。
- 使用預設的 className : `.share-button` 調整 Button 尺寸或樣式，或傳入自定義的 className，並以該 className 進行調整。
- 可傳入 `onClick`, `FbClick`, `LineClick`, `LinkClick` ，設定按鈕點擊後所觸發的函式。( 可利用此 props 設定 GA Event )

![share button](https://github.com/ChangRongXuan/Portfolio/blob/main/imgs/share-button.svg)

## How to Use This Pkg?

1. Install the npm [package](https://www.npmjs.com/package/@readr-media/icon)
   `yarn add @readr-media/mirrormedia-project`
2. Import component in the desired place

```
import styled from 'styled-components'
import { ShareButton } from '@readr-media/mirrormedia-project'

export default function SomeComponent() {

  function handleClickButton() {
    console.log('click share-button')
  }
  function handleClickLine() {
    console.log('click Line icon')
  }
  function handleClickFB() {
    console.log('click FB icon')
  }
  function handleClickLink() {
    console.log('click Link icon')
  }

  return (
    <div>
      <ShareButton
        size="50px"
        color="blue"
        direction="horizon"
        className="custom-name"
        onClick={handleClickButton}
        LineClick={handleClickLine}
        FbClick={handleClickFB}
        LinkClick={handleClickLink}
      />
    </div>
  )
}
```

## Props

| 名稱      | 資料型別          | 必須 | 預設值           | 說明                                                                                      |
| --------- | ----------------- | ---- | ---------------- | ----------------------------------------------------------------------------------------- |
| color     | String            |      | ' '              | 設定 Button 顏色。                                                                        |
| size      | String            |      | ' '              | 設定 Button 尺寸高。（ 因寬高比 1:1，因此此數值會同時設定為寬高）                         |
| direction | String            |      | `"vertical"`     | 設定 Button 展開方向。                                                                    |
| className | String            |      | `"share-button"` | 自訂 className。如無傳入自訂義 className，仍可透過 `.share-button` 更改 LOGO 樣式或尺寸。 |
| onClick   | MouseEventHandler |      | ' '              | 點擊 share-button 後觸發之函式。                                                          |
| FbClick   | MouseEventHandler |      | ' '              | 點擊 DB Icon 後觸發之函式。                                                               |
| LineClick | MouseEventHandler |      | ' '              | 點擊 Line Icon 後觸發之函式。                                                             |
| Link      | MouseEventHandler |      | ' '              | 點擊 Link Icon 後觸發之函式。                                                             |

## TODOs

- [ ] 審核/篩選 width 填入字串不為 `px` 的狀況
