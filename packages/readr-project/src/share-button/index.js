import React from 'react' // eslint-disable-line
import { useState } from 'react'
import styled from 'styled-components'

import { ShareIcon } from './react-components/icon'
import SocialIcon from './react-components/social-icon'

const Container = styled.div`
  margin: 16;
  display: block;
  cursor: pointer;
  position: relative;

  width: ${/**
   *  @param {Object} props
   *  @param {string | number} props.width
   */ (props) => props.width};

  height: ${/**
   *  @param {Object} props
   *  @param {string | number} props.width
   */ (props) => props.width};

  @media (min-width: 576px) {
    margin: 20px 24px;
  }
`

/**
 * @param {Object} props
 * @param {String} [props.color]
 * - color of icon.
 * - optional, default value is `'#ffffff'`.
 * @param {String | Number} [props.width]
 * - icon width.
 * - optional, default value is `''`.
 * @param {String} [props.direction]
 * - icon width.
 * - optional, default value is `'vertical'`.
 * @param {import("react").MouseEventHandler} [props.onClick]
 * - share-icon onClick function.
 * - optional, default value is {()=> void}.
 * @param {import("react").MouseEventHandler} [props.FbClick]
 * - FB-icon onClick function.
 * - optional, default value is {()=> void}.
 * @param {import("react").MouseEventHandler} [props.LineClick]
 * - Line-icon onClick function.
 * - optional, default value is {()=> void}.
 * @returns {JSX.Element}
 */

export default function ShareButton({
  color = '#ffffff',
  width = '42px',
  direction = 'vertical',
  onClick,
  LineClick,
  FbClick,
}) {
  const [show, setShow] = useState(false)

  function toggleShareButton() {
    setShow((show) => !show)
  }

  let iconWidth // share-icon width

  switch (typeof width) {
    case 'string':
      iconWidth = width
      break
    case 'number':
      iconWidth = `${width}px`
      break
    default:
      iconWidth = width
  }

  return (
    <Container
      width={iconWidth}
      onClick={() => {
        toggleShareButton()
        onClick()
      }}
    >
      <ShareIcon color={color} />
      <SocialIcon
        show={show}
        direction={direction}
        FbClick={FbClick}
        LineClick={LineClick}
      />
    </Container>
  )
}
