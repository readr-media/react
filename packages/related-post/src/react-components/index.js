import React, { useCallback, useEffect } from 'react' // eslint-disable-line
import styled from 'styled-components'
import RelatedLists from './related-list'

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
  font-size: 21px;
  line-height: 1.5;
  color: #000000;

  @media (min-width: 768px) {
    margin-bottom: 36px;
    font-size: 28px;
    font-weight: 500;
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
 * @param {String} [props.title]
 * - title.
 * - optional, default value is `"延伸閱讀"`.
 * @param {String} [props.titleClassName]
 * - className of title.
 * - optional, default value is `""`.
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

export default function RelatedPost({
  relatedData = [],
  title = '延伸閱讀',
  titleClassName = '',
  captionClassName = '',
  defaultImage = '',
  debugMode = false,
}) {
  console.log('debugMode', debugMode)
  /**
   * print log when `props.debugMode` is true
   * @param {String} message
   * @returns {void}
   */
  const printLogInDevMode = useCallback(
    (message) => {
      if (debugMode) {
        console.log(message)
      }
    },
    [debugMode]
  )

  useEffect(() => {
    try {
      //check whether `relatedData` is empty.
      //if `relatedData` is empty, show error message.
      if (relatedData.length === 0) {
        printLogInDevMode(`ERROR: props.relatedData has no data`)
      }

      //check each Object in `relatedData` has `caption`.
      //if some Object in `relatedData` lose `caption`, show error message.
      const checkEmptyCaption = (element) => element.caption !== undefined
      if (relatedData.every(checkEmptyCaption)) {
        printLogInDevMode(`ERROR: caption has no data`)
      }
    } catch (err) {
      console.log(err)
    }
  }, [printLogInDevMode, relatedData])

  return (
    <Container>
      <Title className={`related-post-title ${titleClassName}`}>{title}</Title>
      {relatedData && (
        <ul className="related-post-box">
          <RelatedLists
            postAmount={relatedData.length}
            relatedData={relatedData}
            captionClassName={captionClassName}
            defaultImage={defaultImage}
          />
        </ul>
      )}
    </Container>
  )
}
