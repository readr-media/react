import React, { useState } from "react";
import styled from "styled-components";
import QuestionCard from "./QuestionCard";

const List = styled.div`
  margin-top: 20px;
  max-width: 680px;
  @media (min-width: 768px) {
    margin-top: 40px;
  }
`;

const ListTitle = styled.h2`
  font-family: "Noto Serif TC";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #000928;
  margin: 0 0 12px 0;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export default function QuestionsList({ questions }) {
  console.log(questions);
  return (
    <List>
      <ListTitle>你可能還想知道</ListTitle>
      {questions.map((ques) => {
        return <QuestionCard questionItem={ques} key={ques.id} />;
      })}
    </List>
  );
}
