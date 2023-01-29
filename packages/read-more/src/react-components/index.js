import React from 'react' // eslint-disable-line
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding-top: 16px;

  > ul {
    width: 100%;
    padding: 0;
    margin: auto;
  }

  @media (min-width: 768px) {
    > ul {
      max-width: 640px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
`

const Title = styled.p`
  width: 100%;
  margin-bottom: 15px;
  text-align: center;
  font-weight: 600;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '21px')};
  line-height: 1.5;
  color: ${(props) => props.color};

  @media (min-width: 768px) {
    margin-bottom: 36px;
    font-size: ${(props) => (props.fontSize ? props.fontSize : '28px')};
    font-weight: 500;
  }
`
const ReadMoreList = styled.li`
  list-style: none;
  width: 100%;
  max-width: ${(props) => (props.amount === 1 ? 'none' : '280px')};
  margin: 0px auto 24px auto;
  cursor: pointer;

  > a {
    text-decoration: none;
    color: #000000;
  }

  @media (min-width: 768px) {
    margin: 0px;
    margin-bottom: 36px;
    max-width: ${(props) => (props.amount === 1 ? 'none' : '276px')};
  }
`

const ReadMoreImage = styled.div`
  width: 100%;
  height: 187px;
  overflow: hidden;
  margin-bottom: 12px;
  img {
    width: 100%;
    object-fit: contain;
    object-position: center;
  }
  @media (min-width: 768px) {
    margin-bottom: 16px;
    height: ${(props) => (props.amount === 1 ? '394px' : '184px')};
  }
`

const Caption = styled.div`
  height: 50px;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-weight: 400;
  line-height: 1.5;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '18px')};
  color: ${(props) => props.color};

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    height: 80px;
    -webkit-line-clamp: 3;
  }
`

/**
 *  @typedef {Array<Object>} Post
 *  @property {Number | String} id
 *  @property {String} [slug]
 *  @property {String} caption
 *  @property {String} [imageUrl]
 *  @property {String} [alt]
 *  @property {String} [link]
 */

/**
 *
 * @param {Object} props
 * @param {Post} props.readMoreData
 * - post data, default value is `[]`.
 * - required.
 * @param {String} [props.title]
 * - title.
 * - optional, default value is `"延伸閱讀"`.
 * @param {String} [props.titleColor]
 * - color of title.
 * - optional, default value is `"#ffffff"`.
 * @param {String} [props.titleSize]
 * - font-size of title.
 * - optional, default value is `""`.
 * @param {String} [props.captionColor]
 * - color of post title.
 * - optional, default value is `"#ffffff"`.
 * @param {String} [props.captionSize]
 * - font-size of post title.
 * - optional, default value is `""`.
 * @param {String} [props.defaultImage]
 * - default image, it will show if `readMoreData.imageUrl` can not be loaded
 * - optional, default value is `""`.
 * @returns {JSX.Element}
 */

export default function ReadMore({
  readMoreData = [],
  title = '延伸閱讀',
  titleColor = '#ffffff',
  titleSize = '',
  captionColor = '#ffffff',
  captionSize = '',
  defaultImage = '',
}) {
  const listAmount = readMoreData?.length
  const readMoreLists = readMoreData?.map((item) => {
    return (
      <ReadMoreList
        key={item.id}
        className="read-more-list"
        amount={listAmount}
      >
        <a
          href={
            item.slug
              ? `https://www.mirrormedia.mg/story/${item.slug}/`
              : item.link
          }
          target="_blank"
          rel="noreferrer"
        >
          <ReadMoreImage amount={listAmount}>
            <img
              src={item.imageUrl ? item.imageUrl : defaultImage}
              alt={item.alt}
            />
          </ReadMoreImage>
          <Caption
            className="caption"
            fontSize={captionSize}
            color={captionColor}
          >
            {item.caption}
          </Caption>
        </a>
      </ReadMoreList>
    )
  })

  return (
    <Container>
      <Title className="title" color={titleColor} fontSize={titleSize}>
        {title}
      </Title>
      <ul className="container">{readMoreLists}</ul>
    </Container>
  )
}
