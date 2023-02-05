import React from 'react' // eslint-disable-line
import { createRoot } from 'react-dom/client'
import RelatedPost from '../src'
import styled from 'styled-components'

const reactRootId = 'root'
const container = document.getElementById(reactRootId)
const root = createRoot(container)

const mockData = [
  {
    id: 1,
    slug: 'test01',
    caption:
      '【寵粉速報】5元就能訂閱「鏡週刊會員制」【寵粉速報】5元就能訂閱「鏡週刊會員制」【寵粉速報】5元就能訂閱「鏡週刊會員制」【寵粉速報】5元就能訂閱「鏡週刊會員制」【寵粉速報】5元就能訂閱「鏡週刊會員制」',
    imageUrl:
      'https://www.mirrormedia.com.tw/assets/images/20221017214008-027f6c46502e220dd63521d758ef95e6.jpg',
    alt: 'alt測試1',
  },
  {
    id: 2,
    slug: 'test02',
    caption:
      '【寵粉速報】5元就能訂閱「鏡週刊會員制」　年費會員加碼抽Sony旗艦手機',
    imageUrl:
      'https://www.mirrormedia.com.tw/assets/images/20221017214008-027f6c46502e220dd63521d758ef95e6.jpg',
    alt: 'alt測試2',
    link: '',
  },
  {
    id: 3,
    slug: 'test03',
    caption:
      '【寵粉速報】5元就能訂閱「鏡週刊會員制」　年費會員加碼抽Sony旗艦手機　年費會員加碼抽Sony旗艦手機　年費會員加碼抽Sony旗艦手機　年費會員加碼抽Sony旗艦手機　年費會員加碼抽Sony旗艦手機',
    alt: 'alt測試3',
  },
]

const Container = styled.div`
  .title {
    color: red;
    font-size: 20px;
  }
  .caption {
    color: blue;
    font-size: 12px;
  }
`

root.render(
  <Container>
    <RelatedPost
      relatedData={mockData}
      title="相關文章"
      titleClassName="title"
      captionClassName="caption"
      defaultImage="./image/default.png"
      debugMode={true}
    />
  </Container>
)
