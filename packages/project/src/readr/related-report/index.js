import React from 'react' // eslint-disable-line
import styled from 'styled-components'
import RelatedList from './react-components/related-list'

const Container = styled.div`
  width: 100%;
  font-family: 'source-han-sans-traditional', sans-serif;
  > ul {
    padding: 0;
    width: calc(100% - 40px);
    margin: 0 auto 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media (min-width: 576px) {
    > ul {
      justify-content: space-between;
    }
  }

  @media (min-width: 768px) {
    > ul {
      max-width: 672px;
      margin: 0 auto 16px;
    }
  }
  @media (min-width: 1200px) {
    > ul {
      max-width: 1096px;
      margin: 0 auto;
      gap: 24px;
      justify-content: flex-start;
    }
  }
`

const Title = styled.div`
  width: calc(100% - 40px);
  font-size: 24px;
  font-weight: 700;
  line-height: 1em;
  letter-spacing: 0.05rem;
  color: #000928;
  margin: 0 auto 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 3px solid #000928;
  padding: 0 0 12px;

  > span {
    position: relative;
    z-index: 100;
  }

  > span:before {
    content: '';
    position: absolute;
    bottom: 28%;
    height: 42%;
    left: 0;
    right: 0;
    background: ${/**
     *  @param {Object} props
     *  @param {string} props.highlightColor
     */ (props) => (props.highlightColor ? props.highlightColor : '#ffffff')};
    z-index: -1;
  }
  @media (min-width: 768px) {
    margin: 0 auto 40px;
    max-width: 672px;
  }

  @media (min-width: 1200px) {
    max-width: 1096px;
  }
`

/**
 * @typedef {import('../typedef').Post} Post
 *
 * @param {Object} props
 * @param {Post[]} props.relatedData
 * - post data, default value is `[]`.
 * - required.
 * @param {string} [props.title]
 * - title.
 * - optional, default value is `"最新報導"`.
 * @param {string} [props.titleClassName]
 * - className of title.
 * - optional, default value is `"related-post-title"`.
 * @param {string} [props.captionClassName]
 * - className of caption.
 * - optional, default value is `"related-post-caption"`.
 * @param {string} [props.highlightColor]
 * - highlightColor of title.
 * - optional, default value is `""`.
 * @param {string} [props.defaultImage]
 * - default image, it will show if `relatedData.imageUrl` can not be loaded
 * - optional, default value is `""`.
 * @returns {JSX.Element}
 */

export default function RelatedReport({
  relatedData = [],
  title = '最新報導',
  titleClassName = 'related-report-title',
  captionClassName = 'related-report-caption',
  highlightColor = '',
  defaultImage = '',
}) {
  function isDataEmpty(data) {
    try {
      if (!data?.length)
        throw `Error: The 'relatedData' array is empty or undefined.`
      if (
        !data?.every(
          (obj) => obj.hasOwnProperty('caption') && obj['caption'] !== ''
        )
      )
        throw `Error: Not all objects in 'relatedData' have the key 'caption'`
    } catch (err) {
      console.log(err)
    }

    return data?.length !== 0
  }

  return (
    <>
      {isDataEmpty(relatedData) && (
        <Container>
          <Title className={titleClassName} highlightColor={highlightColor}>
            <span>{title}</span>
          </Title>
          {relatedData?.length !== 0 && (
            <ul className="related-report-wrapper">
              <RelatedList
                relatedData={relatedData}
                captionClassName={captionClassName}
                defaultImage={defaultImage}
              />
            </ul>
          )}
        </Container>
      )}
    </>
  )
}
