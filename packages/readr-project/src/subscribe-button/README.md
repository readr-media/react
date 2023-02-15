# Subscribe Button / 訂閱電子報按鈕

## Feature

- 元件功能
  - 點擊按鈕可另開分頁至 [Readr 電子報訂閱頁面](https://mirrormedia.us20.list-manage.com/subscribe?u=abc4070576912aac81ed23a44&id=ca41073bb5)。
  - 使用預設的 className : '`.subscribe-button`' 調整按鈕樣式，或傳入自定義的 className，並以該 className 進行調整。
  - 可傳入 onClick function，設定按鈕點擊後所觸發的函式。( 可利用此 props 設定 GA Event )

## How to Use This React Component ?

1. Install the npm [package](https://www.npmjs.com/package/@readr-media/readr-project)
   `yarn add @readr-media/readr-project`
2. Import component in the desired place

```
import styled from 'styled-components'
import { SubscribeButton } from '@readr-media/readr-project'

const Container = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;

  //adjust style by passing `className` props
  .custom-name {
     background: #ffffff;

     &:hover {
      background: red;
     }
  }
`

const ClickButton = () => {
  console.log('click button')
}

export default function ComponentName() {
  return (
    <Container >
      <SubscribeButton
       className="custom-name"
       onClick={ClickFunction} />
    </Container >
  )
}
```

## Props

| 名稱      | 資料型別          | 必須 | 預設值             | 說明                                                                                    |
| --------- | ----------------- | ---- | ------------------ | --------------------------------------------------------------------------------------- |
| className | String            |      | `subscribe-button` | 自訂 className。如無傳入自訂義 className，仍可透過 '`.subscribe-button`' 更改按鈕樣式。 |
| onClick   | MouseEventHandler |      | ' '                | 點擊按鈕後觸發之函式。                                                                  |

## TODOs

- [ ] 建立 CI pipeline，透過 CI 產生 npm package，並且上傳至 npm registry
- [ ] 透過 Lerna 控制 packages 之間的版號
