import React from "react";
import Checkbox from "./form/checkbox";
import Button from "./form/buttons";

export default function QA(props) {
  function onClick(e) {
    console.log("click", e);
  }
  return (
    <>
      <Checkbox title='你是否有以下經歷？（複選）' />
      <div>
        <Button title='開始查詢' onClick={onClick} disabled={false} />
      </div>

      <Button title='我不能按' onClick={onClick} disabled={true} />
    </>
  );
}
