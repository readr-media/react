import React from 'react' // eslint-disable-line
import styled from 'styled-components'

const Button = styled.a`
  font-family: 'Source Han Sans Traditional', sans-serif;
  width: 100%;
  max-width: 396px;
  display: block;
  letter-spacing: 2.5px;
  font-size: 15px;
  font-weight: 700;
  padding: 12px 10px 12px;
  border-radius: 2px;
  text-align: center;
  -o-transition: background-color 0.3s, color 0.3s;
  transition: background-color 0.3s, color 0.3s;
  box-shadow: 3px 3px 0px 0px #04295e;
  border: 1px solid #f5ebff;
  text-decoration: none;
  color: #000928;
  background-color: #ebf02c;
  margin: 48px auto 52px;

  &:hover {
    cursor: pointer;
    background: #04295e;
    color: #ffffff;
  }

  @media (min-width: 576px) {
    margin: 60px auto 64px;
  }
`

/**
 * @param {Object} props
 * @param {string} props.className
 * - className of button.
 * - optional, default value is 'donate-button'.
 * @param {import("react").MouseEventHandler} [props.onClick]
 * - button onClick function.
 * - optional, default value is {()=> void}.
 * @returns {JSX.Element}
 */

export default function DonateButton({ className = 'donate-button', onClick }) {
  return (
    <Button
      className={className}
      href="https://www.readr.tw/donate"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      贊助 READr 一起媒體實驗改革
    </Button>
  )
}
