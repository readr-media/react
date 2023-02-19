# MirrorTV Logo

## Feature

- 元件功能

  - 點擊按鈕可另開頁面至 [鏡週刊 首頁](https://www.mirrormedia.mg/)。
  - 可傳入 `color`，調整 LOGO 顏色。
  - 使用預設的 className : `.mirrortv-logo` 調整 LOGO 尺寸或樣式，或傳入自訂的 className，並以該 className 進行調整。
  - 可傳入 `onClick` function，設定按鈕點擊後所觸發的函式。( 可利用此 props 設定 GA Event )

![Mirrortv Logo](https://github.com/ChangRongXuan/Portfolio/blob/main/imgs/mirror-tv-black.svg)

## How to Use This React Component ?

1. Install the npm [package](https://www.npmjs.com/package/@readr-media/mirrormedia-project)
   `yarn add @readr-media/mirrormedia-project`
2. Import component in the desired place

```
import styled from 'styled-components'
import { MirrorTVLogo } from '@readr-media/mirrormedia-project'

const Container = styled.div`

  //adjust style by passing `className` props
  .custom-name {
     width: 50px;
     margin: 10px 20px;
  }
`

const ClickLogo = () => {
  console.log('click logo')
}

export default function ComponentName() {
  return (
    <Container>
      <MirrorTVLogo
       color="white"
       className="custom-name"
       onClick={ClickLogo}
      />
    </Container >
  )
}
```

## Props

| 名稱      | 資料型別          | 必須 | 預設值          | 說明                                                                                     |
| --------- | ----------------- | ---- | --------------- | ---------------------------------------------------------------------------------------- |
| color     | String            |      | ' '             | 設定 LOGO 顏色。                                                                         |
| className | String            |      | `mirrortv-logo` | 自訂 className。如無傳入自訂 className，仍可透過 `.mirrortv-logo` 更改 LOGO 樣式或尺寸。 |
| onClick   | MouseEventHandler |      | ' '             | 點擊 LOGO 後觸發之函式。                                                                 |

## TODOs

- [ ] 建立 CI pipeline，透過 CI 產生 npm package，並且上傳至 npm registry
- [ ] 透過 Lerna 控制 packages 之間的版號
- [ ] error handling
