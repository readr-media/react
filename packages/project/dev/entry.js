import React from 'react' // eslint-disable-line
import { createRoot } from 'react-dom/client'
import {
  DonateButton,
  ReadrLogo,
  SubscribeButton,
  RelatedReport,
} from '../src/readr'
import { TVLogo } from '../src/tv'
import { RelatedPost, ShareButton, WeeklyLogo } from '../src/weekly'
import styled from 'styled-components'

const reactRootId = 'root'
const container = document.getElementById(reactRootId)
const root = createRoot(container)

const mockData = [
  {
    id: 1,
    slug: 'test01',
    caption:
      '【寵粉速報】5元就能訂閱「鏡週刊會員制」【寵粉速報】5元就能訂閱「鏡週刊會員制」',
    imageUrl:
      'https://www.mirrormedia.com.tw/assets/images/20221017214008-027f6c46502e220dd63521d758ef95e6.jpg',
    alt: 'alt測試1',
    date: '2023-02-08T07:00:00.000Z',
    time: 15,
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
    date: '2022-02-08T07:00:00.000Z',
    time: 15,
  },
  {
    id: 3,
    slug: 'test03',
    caption: '【寵粉速報】5元就能訂閱「鏡週刊會員制」　年費會員加碼',
    alt: 'alt測試3',
    date: '2021-02-08T07:00:00.000Z',
    time: 15,
  },
]

const Header = styled.div`
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`

root.render(
  <>
    <div className="mirror-weekly-container">
      <Header>
        <WeeklyLogo />
        <ShareButton />
      </Header>

      <RelatedPost relatedData={mockData} />
    </div>

    <div className="mirror-tv-container">
      <Header>
        <TVLogo />
      </Header>
    </div>

    <div className="readr-container">
      <Header>
        <ReadrLogo />
      </Header>

      <SubscribeButton />
      <DonateButton />
      <RelatedReport relatedData={mockData} />
    </div>
  </>
)
