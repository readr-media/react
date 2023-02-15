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
    justify-content: space-between;
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

export default function RelatedPost({
  relatedData = [],
  title = '最新報導',
  titleClassName = 'related-post-title',
  captionClassName = 'related-post-caption',
  highlightColor = '',
  defaultImage = '',
  debugMode = false,
}) {
  try {
    //check whether `relatedData` is empty.
    //if `relatedData` is empty, show error message.
    if (relatedData?.length === 0 && debugMode) {
      console.log(`ERROR: props.relatedData has no data`)
    }

    //check each Object in `relatedData` has `caption`.
    //if some Object in `relatedData` lose `caption`, show error message.
    const checkEmptyCaption = (element) => element.caption !== undefined
    if (!relatedData?.every(checkEmptyCaption) && debugMode) {
      console.log(`ERROR: caption has no data`)
    }
  } catch (err) {
    console.log(err)
  }

  return (
    <Container>
      <Title className={titleClassName} highlightColor={highlightColor}>
        <span>{title}</span>
      </Title>
      {relatedData?.length !== 0 && (
        <ul className="related-post-wrapper">
          <RelatedList
            relatedData={relatedData}
            captionClassName={captionClassName}
            defaultImage={defaultImage}
          />
        </ul>
      )}
    </Container>
  )
}
