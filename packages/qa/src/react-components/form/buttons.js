import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  width: 100%;
  max-width: 320px;
  padding: 12px;
  font-family: "Noto Sans CJK TC";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #ffffff;
  background: #04295e;
  border-radius: 6px;
  border: 0;
  &:hover {
    cursor: pointer;
    background: #000928;
  }
  ${(props) =>
    props.diabled &&
    `
  background: #E0E0E0;
  &:hover {
    cursor: auto;
    background: #E0E0E0;
  }
  `}
`;

export default function Button({ title, handleOnClick, disabled }) {
  return (
    <ButtonWrapper
      onClick={(e) => {
        if (!disabled) handleOnClick(e);
      }}
      diabled={disabled}
    >
      {title}
    </ButtonWrapper>
  );
}
