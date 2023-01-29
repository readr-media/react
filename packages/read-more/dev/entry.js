import React from 'react' // eslint-disable-line
import { createRoot } from 'react-dom/client'

import ReadMore from '../src'

const reactRootId = 'root'
const container = document.getElementById(reactRootId)
const root = createRoot(container)

const mockData = [
  {
    id: 1,
    slug: 'test01',
    caption:
      '【寵粉速報】5元就能訂閱「鏡週刊會員制」　年費會員加碼抽Sony旗艦手機　年費會員加碼抽Sony旗艦手機　年費會員加碼抽Sony旗艦手機',
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
      '【寵粉速報】5元就能訂閱「鏡週刊會員制」　年費會員加碼抽Sony旗艦手機',
    alt: 'alt測試3',
  },
  {
    id: 4,
    caption: '【寵粉速報】5元就能訂閱「鏡週刊會員制」',
    imageUrl:
      'https://www.mirrormedia.com.tw/assets/images/20221017214008-027f6c46502e220dd63521d758ef95e6.jpg',
    link: 'https://www.mirrormedia.mg/projects/fifa2022/index.html',
  },
]

root.render(
  <ReadMore
    readMoreData={mockData}
    title="延伸閱讀"
    titleColor=""
    titleSize=""
    captionSize=""
    captionColor=""
    defaultImage="default-img.svg"
  />
)
