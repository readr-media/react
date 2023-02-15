import React from 'react' // eslint-disable-line
import styled from 'styled-components'

import { ReadrIcon } from './react-components/icon'

const LogoWrap = styled.div`
  height: auto;
  cursor: pointer;
  display: inline-block;
  margin: 12px 20px;
  width: ${/**
   *  @param {Object} props
   *  @param {string | number} props.width
   */ (props) => (props.width ? props.width : '42px')};

  @media (min-width: 576px) {
    margin: 16px 24px;
    width: ${/**
     *  @param {Object} props
     *  @param {string | number} props.width
     */ (props) => (props.width ? props.width : '48px')};
  }
`

/**
 * @param {Object} props
 * @param {string | number} [props.width]
 * - width of logo.
 * - optional, default value is `''`.
 * @param {string} [props.color]
 * - color of logo.
 * - optional, default value is `"#ffffff"`.
 *  * @param {string} [props.className]
 * - className of logo.
 * - optional, default value is 'readr-logo'.
 * @param {import("react").MouseEventHandler} [props.onClick]
 * - logo onClick function.
 * - optional, default value is {()=> void}.
 * @returns {JSX.Element}
 */

export default function ReadrLogo({
  width = '',
  color = '',
  className = 'readr-logo',
  onClick,
}) {
  let logoWidth

  switch (typeof width) {
    case 'string':
      logoWidth = width
      break
    case 'number':
      logoWidth = `${width}px`
      break
    default:
      logoWidth = width
  }

  return (
    <LogoWrap width={logoWidth} className={className} onClick={onClick}>
      <a href="https://www.readr.tw/" rel="noopener noreferrer">
        <ReadrIcon color={color} />
      </a>
    </LogoWrap>
  )
}
