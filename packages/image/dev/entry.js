import Image from '../src/react-components'
import React from 'react' // eslint-disable-line
import { createRoot } from 'react-dom/client'

const reactRootId = 'root'
const container = document.getElementById(reactRootId)
const root = createRoot(container)

const mocks = [
  {
    w480:
      'https://dev.readr.tw/assets/images/cl8slvqpc000710ysgvdm4vsd-tiny.png',
    w800:
      'https://dev.readr.tw/assets/images/cl8slvqpc000710ysgvdm4vsd-mobile.png',
    w1200: '',
    w1600:
      'https://dev.readr.tw/assets/images/cl8slvqpc000710ysgvdm4vsd-mobile.png',
    w2400:
      'https://dev.readr.tw/assets/images/cl8slvqpc000710ysgvdm4vsd-desktop.png',
    original:
      'https://dev.readr.tw/assets/images/cl8slvqpc000710ysgvdm4vsd.png',
  },
]

root.render(
  <div>
    <div style={{ height: '100vh', backgroundColor: 'pink' }}>
      這是一個滿版的區塊
    </div>
    {mocks.map((item, index) => (
      <Image
        key={index}
        images={item}
        defaultImage="post.svg"
        loadingImage="./loading.gif"
        alt="圖片"
        width="100%"
        height="100%"
        objectFit="cover"
        debugMode={true}
      ></Image>
    ))}
  </div>
)
