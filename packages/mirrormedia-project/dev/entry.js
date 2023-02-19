import React from 'react' // eslint-disable-line
import { createRoot } from 'react-dom/client'
import { RelatedPost, ShareButton, MirrorMediaLogo, MirrorTVLogo } from '../src'
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
    color: blue;
    font-size: 20px;
  }
  .caption {
    font-size: 12px;
  }
`
const Header = styled.div`
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  .mirrortv-logo {
    width: 250px;
  }

  .mirrormedia-logo {
    width: 200px;
  }
`

root.render(
  <Container>
    <Header>
      <MirrorTVLogo color="blue" />
      <MirrorMediaLogo color="#494949" />
      <ShareButton direction="horizon" size={50} />
    </Header>

    <RelatedPost
      relatedData={mockData}
      title="相關文章"
      titleClassName="title"
      captionClassName="caption"
      debugMode={true}
    />
  </Container>
)
