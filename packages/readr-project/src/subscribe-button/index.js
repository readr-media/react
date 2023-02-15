import React from 'react' // eslint-disable-line
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px 20px;
  background: ${/**
   *  @param {Object} props
   *  @param {number} props.backgroundColor
   */ (props) => props.backgroundColor};
`

const Button = styled.a`
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

  &:hover {
    cursor: pointer;
    background: #000928;
  }
`

/**
 * @param {Object} props
 * @param {string} props.className
 * - className of button.
 * - optional, default value is 'subscribe-button'.
 * @param {string} props.backgroundColor
 * - background-color of
 * - optional, default value is 'subscribe-button'.
 * @param {import("react").MouseEventHandler} [props.onClick]
 * - button onClick function.
 * - optional, default value is {()=> void}.
 * @returns {JSX.Element}
 */

export default function SubscribeButton({
  className = 'subscribe-button',
  backgroundColor = 'transparent',
  onClick,
}) {
  return (
    <Container backgroundColor={backgroundColor}>
      <Button
        className={className}
        href="http://eepurl.com/gk-FF1"
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        訂閱電子報
      </Button>
    </Container>
  )
}
