import React from 'react' // eslint-disable-line
import { createRoot } from 'react-dom/client'
import styled from 'styled-components'
import {
  ReadrLogo,
  DonateButton,
  SubscribeButton,
  RelatedPost,
  ShareButton,
} from '../src'

const reactRootId = 'root'
const container = document.getElementById(reactRootId)
const root = createRoot(container)

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Report = styled.div`
  background-color: #ebf02c;
  padding: 60px 0px;
`

const data = [
  {
    id: 1,
    slug: 'post-slug-01',
    caption: '社群平臺上的俄烏戰爭：美國也有責任？臺灣最在意中國威脅？',
    imageUrl:
      'https://www.readr.tw/assets/images/cl14pnaz4000e11vwb4ay1qv5-mobile.png',
    alt: '文章敘述01',
    link: 'https://www.mirrormedia.mg',
    date: '2023/1/2',
    time: 10,
  },
]

root.render(
  <>
    <Header>
      <ReadrLogo
        width={50}
        color=""
        className="logo"
        onClick={() => console.log('click logo')}
      />
      <ShareButton color="black" />
    </Header>
    <SubscribeButton className="test" backgroundColor="#04295e" />
    <DonateButton className="test2" />
    <Report>
      <RelatedPost relatedData={data} title="最新資訊" highlightColor="white" />
      <RelatedPost relatedData={data} />
    </Report>
  </>
)
