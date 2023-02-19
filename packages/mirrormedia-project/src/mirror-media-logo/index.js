import React from 'react' // eslint-disable-line
import styled from 'styled-components'
import { MirrorMediaIcon } from './react-components/icon'

const Logo = styled.a`
  display: inline-block;
  width: 63px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media (min-width: 768px) {
    width: 90.7px;
  }
`

/**
 * @param {Object} props
 * @param {string} [props.color]
 * - color of logo.
 * - optional, default value is `''`.
 * @param {string} [props.className]
 * - className of logo.
 * - optional, default value is `'mirrormedia-logo'`.
 * @param {import("react").MouseEventHandler} [props.onClick]
 * - logo onClick function.
 * - optional, default value is {()=> void}.
 * @returns {JSX.Element}
 */

export default function MirrorMediaLogo({
  className = 'mirrormedia-logo',
  color = '',
  onClick,
}) {
  return (
    <Logo
      href="https://www.mirrormedia.mg"
      target="_blank"
      rel="noreferrer noopenner"
      className={className}
      onClick={onClick}
    >
      <MirrorMediaIcon color={color} />
    </Logo>
  )
}
