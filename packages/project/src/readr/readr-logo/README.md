# Readr Logo

## Feature

- 元件功能

  - 可傳入 `size` 調整 LOGO 尺寸。( 注意：因 LOGO 寬高比為 1:1 ，因此傳入之 `size` 值，將同時設定為 LOGO 的寬與高。)
  - 可傳入 `href` 設定點擊後之外連頁面網址。預設值為 [Readr 首頁](https://www.readr.tw/)。
  - 設定 `openNewTab` 決定點擊後是否另開分頁，預設為 true。
  - 可傳入 `color`，調整 LOGO 顏色。
  - 使用預設的 className : `.readr-logo` 調整 LOGO 樣式或尺寸，或傳入自訂的 className，並以該 className 進行調整。
  - 可傳入 `onClick` function，設定按鈕點擊後所觸發的函式。( 可利用此 props 設定 GA Event )

![Readr Logo](https://github.com/ChangRongXuan/Portfolio/blob/main/imgs/readr-logo.png)

## How to Use This React Component ?

1. Install the npm [package](https://www.npmjs.com/package/@readr-media/project)
   `yarn add @readr-media/project`
2. Import component in the desired place

```
import styled from 'styled-components'
import { ReadrLogo } from '@readr-media/project'

const Container = styled.div`

  //adjust style by passing `className` props
  .custom-name {
     margin: auto;
  }
`

const ClickLogo = () => {
  console.log('click logo')
}

export default function ComponentName() {
  return (
    <Container>
      <ReadrLogo
       size="80px"
       color="black"
       className="custom-name"
       onClick={ClickLogo}
       openNewTab={false}
      />
     </Container >
  )
}
```

## Props

| 名稱       | 資料型別          | 必須 | 預設值                  | 說明                                                                                  |
| ---------- | ----------------- | ---- | ----------------------- | ------------------------------------------------------------------------------------- |
| size       | String / Number   |      | ' '                     | 設定 LOGO 寬高（ 寬高比 1:1 )。                                                       |
| color      | String            |      | ' '                     | 設定 LOGO 顏色。                                                                      |
| href       | String            |      | 'https://www.readr.tw/' | 設定 Logo 點擊後連結頁面網址。                                                        |
| openNewTab | Boolean           |      | true                    | 設定點擊後是否另開分頁。true：target: "\_blank", false："\_self"                      |
| className  | String            |      | `readr-logo`            | 自訂 className。如無傳入自訂 className，仍可透過 `.readr-logo` 更改 LOGO 樣式或尺寸。 |
| onClick    | MouseEventHandler |      | ' '                     | 點擊 LOGO 後觸發之函式。                                                              |

## TODOs

- [ ] 建立 CI pipeline，透過 CI 產生 npm package，並且上傳至 npm registry
- [ ] 透過 Lerna 控制 packages 之間的版號
