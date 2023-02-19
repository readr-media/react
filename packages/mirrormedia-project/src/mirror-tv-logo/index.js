import React from 'react' // eslint-disable-line
import styled from 'styled-components'
import { MirrorTVIcon } from './react-components/icon'

const Logo = styled.a`
  display: inline-block;
  width: 80px;
  height: auto;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 82px;
  }

  @media (min-width: 768px) {
    width: 128px;
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

export default function MirrorTVLogo({
  className = 'mirrortv-logo',
  color = '',
  onClick,
}) {
  return (
    <Logo
      href="https://www.mirrormedia.mg/"
      target="_blank"
      rel="noreferrer noopenner"
      className={className}
      onClick={onClick}
    >
      <MirrorTVIcon color={color} />
    </Logo>
  )
}
