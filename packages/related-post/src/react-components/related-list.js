import React, { useCallback, useState, useEffect } from 'react' // eslint-disable-line
import styled from 'styled-components'
import DefaultImage from './image/default-image'

const RelatedList = styled.li`
  list-style: none;
  width: 100%;
  max-width: 280px;
  margin: 0px auto 24px auto;
  cursor: pointer;

  > a {
    text-decoration: none;
    color: #000000;
  }

  @media (min-width: 768px) {
    margin: 0px;
    margin-bottom: 36px;
    max-width: ${/**
     *  @param {Object} props
     *  @param {Number} props.amount
     */ (props) => (props.amount === 1 ? 'none' : '276px')};
  }
`

const ImgBlock = styled.div`
  width: 100%;
  height: 187px;
  overflow: hidden;
  margin-bottom: 12px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  @media (min-width: 768px) {
    margin-bottom: 16px;
    height: ${/**
     *  @param {Object} props
     *  @param {Number} props.amount
     */ (props) => (props.amount === 1 ? '394px' : '184px')};
  }
`

const PostCaption = styled.div`
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-weight: 400;
  line-height: 1.5;
  font-size: 18px;
  color: ${(props) => props.color};

  @media (min-width: 768px) {
    -webkit-line-clamp: 3;
  }
`

/**
 *  @typedef {Array<Object>} Post
 *  @property {String} caption
 *  @property {Number | String} [id]
 *  @property {String} [slug]
 *  @property {String} [imageUrl]
 *  @property {String} [alt]
 *  @property {String} [link]
 */
/**
 * @param {Object} props
 * @param {Post} props.relatedData
 * - post data, default value is `[]`.
 * - required.
 * @param {String} [props.captionClassName]
 * - className of caption.
 * - optional, default value is `""`.
 * @param {String} [props.defaultImage]
 * - default image, it will show if `relatedData.imageUrl` can not be loaded
 * - optional, default value is `""`.
 * @param {Boolean} [props.debugMode]
 * - can set if is in debug mode
 * - if `true`, then will print log of error.
 * - optional, default value is `false`.
 * @returns {JSX.Element}
 */

export default function RelatedLists({
  relatedData,
  postAmount,
  captionClassName,
  defaultImage,
}) {
  // Post-image：error handle
  // if `props.relatedData.imageUrl` occur error, show `props.defaultImage`.
  // if `props.defaultImage` occur error, show `<DefaultImage>`.
  /**
   * @param {String} imgSrc
   * @param {String} postAmount
   * @param {String} alt
   * @returns {JSX.Element}
   */
  function RelatedPostImage({ imgSrc, postAmount, alt }) {
    const [errored, setErrored] = useState(false)
    return (
      <ImgBlock amount={postAmount}>
        {imgSrc && !errored ? (
          <img src={imgSrc} onError={() => setErrored(true)} alt={alt} />
        ) : (
          <DefaultImage />
        )}
      </ImgBlock>
    )
  }

  return (
    <>
      {relatedData.map((item, index) => {
        return (
          <RelatedList
            key={item.id ? item.id : index}
            className="related-post-list"
            amount={postAmount}
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
              <RelatedPostImage
                postAmount={postAmount}
                imgSrc={item.imageUrl ? item.imageUrl : defaultImage}
                alt={item.alt}
              />
              {item.caption && (
                <PostCaption
                  className={`related-post-caption ${captionClassName}`}
                >
                  {item.caption}
                </PostCaption>
              )}
            </a>
          </RelatedList>
        )
      })}
    </>
  )
}
