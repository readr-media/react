import React from 'react' // eslint-disable-line
import styled from 'styled-components'

const Button = styled.a`
  font-family: 'Source Han Sans Traditional', sans-serif;
  width: 100%;
  max-width: 568px;
  display: block;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: 2.5px;
  text-align: center;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 2px;
  padding: 12px 24px;
  text-decoration: none;
  background-color: #04295e;
  margin: 48px auto;

  &:hover {
    cursor: pointer;
    background: #000928;
  }
`

/**
 * @param {Object} props
 * @param {string} props.className
 * - className of subscribe-button.
 * - optional, default value is 'subscribe-button'.
 * @param {import("react").MouseEventHandler} [props.onClick]
 * - button onClick function.
 * - optional, default value is {()=> void}.
 * @returns {JSX.Element}
 */

export default function SubscribeButton({
  className = 'subscribe-button',
  onClick,
}) {
  return (
    <Button
      className={className}
      href="http://eepurl.com/gk-FF1"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      訂閱電子報
    </Button>
  )
}
