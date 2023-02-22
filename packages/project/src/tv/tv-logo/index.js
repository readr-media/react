import React from 'react' // eslint-disable-line
import styled from 'styled-components'
import { MirrorTVIcon } from './react-components/icon'

const Logo = styled.a`
  display: flex;
  align-items: center;
  display: inline-block;
  width: 80px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media (min-width: 768px) {
    width: 82px;
  }

  @media (min-width: 1200px) {
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
 * - optional, default value is `'tv-logo'`.
 * @param {import("react").MouseEventHandler} [props.onClick]
 * - logo onClick function.
 * - optional, default value is {()=> void}.
 * @returns {JSX.Element}
 */

export default function TVLogo({ className = 'tv-logo', color = '', onClick }) {
  return (
    <Logo
      href="https://www.mnews.tw/"
      target="_blank"
      rel="noreferrer noopenner"
      className={className}
      onClick={onClick}
      aria-label="前往 鏡電視 首頁"
    >
      <MirrorTVIcon color={color} />
    </Logo>
  )
}
