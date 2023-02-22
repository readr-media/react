import React from 'react' // eslint-disable-line
import styled from 'styled-components'

import { ReadrIcon } from './react-components/icon'

const Logo = styled.a`
  cursor: pointer;
  display: inline-block;
  margin: 12px 20px;

  width: ${/**
   *  @param {Object} props
   *  @param {string} props.size
   */ (props) => (props.size ? props.size : '42px')};

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media (min-width: 576px) {
    margin: 16px 24px;

    width: ${/**
     *  @param {Object} props
     *  @param {string} props.size
     */ (props) => (props.size ? props.size : '48px')};
  }
`

/**
 * @param {Object} props
 * @param {string} [props.href]
 * - href of logo.
 * - optional, default value is `'https://www.readr.tw/'`.
 * @param {boolean} [props.openNewTab]
 * - decide whether to open a new tab.
 * - true: target='_blank' : '_self'}
 * - optional, default value is `'true'`.
 * @param {string | number} [props.size]
 * - size of logo. 1:1 aspect ratio of width to height
 * - optional, default value is `''`.
 * @param {string} [props.color]
 * - color of logo.
 * - optional, default value is `''`.
 * @param {string} [props.className]
 * - className of logo.
 * - optional, default value is 'readr-logo'.
 * @param {import("react").MouseEventHandler} [props.onClick]
 * - logo onClick function.
 * - optional, default value is {()=> void}.
 * @returns {JSX.Element}
 */

export default function ReadrLogo({
  size = '',
  href = 'https://www.readr.tw/',
  color = '',
  openNewTab = true,
  className = 'readr-logo',
  onClick,
}) {
  let logoSize

  switch (typeof size) {
    case 'string':
      logoSize = size
      break
    case 'number':
      logoSize = `${size}px`
      break
    default:
      logoSize = size
  }

  return (
    <Logo
      size={logoSize}
      className={className}
      onClick={onClick}
      href={href}
      target={openNewTab ? '_blank' : '_self'}
      rel="noopener noreferrer"
      aria-label="前往 READr 首頁"
    >
      <ReadrIcon color={color} />
    </Logo>
  )
}
