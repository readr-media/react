import React from "react";
import Checkbox from "./form/checkbox";
import Result from "./form/result";

export default function QA(props) {
  const mockFormResultData = {
    id: "2",
    name: "你需要進行居家隔離及自主防疫。",
    content: {
      blocks: [
        {
          key: "81b53",
          data: {},
          text: "",
          type: "unstyled",
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
        {
          key: "evlco",
          data: {},
          text: " ",
          type: "atomic",
          depth: 0,
          entityRanges: [
            {
              key: 0,
              length: 1,
              offset: 0,
            },
          ],
          inlineStyleRanges: [],
        },
        {
          key: "b3rj0",
          data: {},
          text: "若期間有症狀則進行快篩，若快篩為陰性，則繼續隔離/管理至期滿。",
          type: "unstyled",
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
        {
          key: "75tuc",
          data: {},
          text:
            "若快篩為陽性，可視訊醫生問診，由醫生評估你的身體狀況跟快篩結果決定是否確診。",
          type: "unstyled",
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
        {
          key: "f0hvh",
          data: {},
          text:
            "若醫生評估未確診，但你不認同醫生的判斷，可自行去醫院或篩檢站進行 PCR 檢測（但不能搭乘大眾交通工具）；若你在居家隔離中，可通知地方衛生局，進行 PCR 檢測。",
          type: "unstyled",
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
        {
          key: "9gmo3",
          data: {},
          text: " ",
          type: "atomic",
          depth: 0,
          entityRanges: [
            {
              key: 1,
              length: 1,
              offset: 0,
            },
          ],
          inlineStyleRanges: [],
        },
        {
          key: "f2mio",
          data: {},
          text: "自主防疫注意事項",
          type: "unstyled",
          depth: 0,
          entityRanges: [
            {
              key: 2,
              length: 4,
              offset: 0,
            },
          ],
          inlineStyleRanges: [],
        },
        {
          key: "2561m",
          data: {},
          text: "快篩陰性才可上班",
          type: "unordered-list-item",
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
        {
          key: "57dm3",
          data: {},
          text: "快篩陰性才可外出採買",
          type: "unordered-list-item",
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
        {
          key: "57tgd",
          data: {},
          text: "不可至人潮壅擠處",
          type: "unordered-list-item",
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
        {
          key: "77ijn",
          data: {},
          text: "不可聚餐",
          type: "unordered-list-item",
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
        {
          key: "5537o",
          data: {},
          text: "不可餐廳內用",
          type: "unordered-list-item",
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
        {
          key: "3j7op",
          data: {},
          text: "不可公眾聚會",
          type: "unordered-list-item",
          depth: 1,
          entityRanges: [],
          inlineStyleRanges: [],
        },
        {
          key: "b7rjk",
          data: {},
          text: "不可與不特定對象接觸",
          type: "unordered-list-item",
          depth: 0,
          entityRanges: [],
          inlineStyleRanges: [],
        },
      ],
      entityMap: {
        "0": {
          data: {
            caption: "",
            embeddedCode:
              '<div class="flourish-embed flourish-chart" data-src="visualisation/1354785" data-url="https://flo.uri.sh/visualisation/1354785/embed" aria-label=""><script src="https://public.flourish.studio/resources/embed.js"></script></div>',
          },
          type: "EMBEDDEDCODE",
          mutability: "IMMUTABLE",
        },
        "1": {
          data: {
            id: "1",
            desc: "",
            name: "test",
            resized: {
              original:
                "https://storage.googleapis.com/statics-editools-dev/images/7dd31d80-052d-48f2-aff1-c81e8b8a1eba.jpg",
            },
            imageFile: {
              url: "/images/7dd31d80-052d-48f2-aff1-c81e8b8a1eba.jpg",
            },
          },
          type: "image",
          mutability: "IMMUTABLE",
        },
        "2": {
          data: {
            color: "#48C0AB",
          },
          type: "COLORTEXT",
          mutability: "MUTABLE",
        },
      },
    },
    createdAt: "2022-05-20T10:09:35.422Z",
    updatedAt: null,
  };

  return (
    <>
      <Result resultData={mockFormResultData} />
      <Checkbox title='你是否有以下經歷？（複選）' />
    </>
  );
}
