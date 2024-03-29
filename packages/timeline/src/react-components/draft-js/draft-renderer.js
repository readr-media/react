import { Editor, EditorState, convertFromRaw } from 'draft-js'
import decorators from './entity-decorator'
import { atomicBlockRenderer } from './block-redender-fn'
import styled from 'styled-components'

// to be separate
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
}
const blockRendererFn = (block) => {
  const atomicBlockObj = atomicBlockRenderer(block)
  return atomicBlockObj
}

const getBlockStyle = (block) => {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote'

    default:
      return null
  }
}

const Wrapper = styled.div`
  .DraftEditor-editorContainer,
  .DraftEditor-root,
  .public-DraftEditor-content {
    height: inherit;
    text-align: initial;
  }
  .public-DraftEditor-content[contenteditable='true'] {
    -webkit-user-modify: read-write-plaintext-only;
  }
  .DraftEditor-root {
    position: relative;
  }
  .DraftEditor-editorContainer {
    background-color: rgba(255, 255, 255, 0);
    border-left: 0.1px solid transparent;
    position: relative;
    z-index: 1;
  }
  .public-DraftEditor-block {
    position: relative;
  }
  .DraftEditor-alignLeft .public-DraftStyleDefault-block {
    text-align: left;
  }
  .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {
    left: 0;
    text-align: left;
  }
  .DraftEditor-alignCenter .public-DraftStyleDefault-block {
    text-align: center;
  }
  .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {
    margin: 0 auto;
    text-align: center;
    width: 100%;
  }
  .DraftEditor-alignRight .public-DraftStyleDefault-block {
    text-align: right;
  }
  .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {
    right: 0;
    text-align: right;
  }
  .public-DraftEditorPlaceholder-root {
    color: #9197a3;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  .public-DraftEditorPlaceholder-hasFocus {
    color: #bdc1c9;
  }
  .DraftEditorPlaceholder-hidden {
    display: none;
  }
  .public-DraftStyleDefault-block {
    position: relative;
    white-space: pre-wrap;
  }
  .public-DraftStyleDefault-ltr {
    direction: ltr;
    text-align: left;
  }
  .public-DraftStyleDefault-rtl {
    direction: rtl;
    text-align: right;
  }
  .public-DraftStyleDefault-listLTR {
    direction: ltr;
  }
  .public-DraftStyleDefault-listRTL {
    direction: rtl;
  }
  .public-DraftStyleDefault-ol,
  .public-DraftStyleDefault-ul {
    margin: 16px 0;
    padding: 0;
  }
  .public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR {
    margin-left: 1.5em;
  }
  .public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL {
    margin-right: 1.5em;
  }
  .public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR {
    margin-left: 3em;
  }
  .public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL {
    margin-right: 3em;
  }
  .public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR {
    margin-left: 4.5em;
  }
  .public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL {
    margin-right: 4.5em;
  }
  .public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR {
    margin-left: 6em;
  }
  .public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL {
    margin-right: 6em;
  }
  .public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR {
    margin-left: 7.5em;
  }
  .public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL {
    margin-right: 7.5em;
  }
  .public-DraftStyleDefault-unorderedListItem {
    list-style-type: square;
    position: relative;
  }
  .public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0 {
    list-style-type: disc;
  }
  .public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1 {
    list-style-type: circle;
  }
  .public-DraftStyleDefault-orderedListItem {
    list-style-type: none;
    position: relative;
  }
  .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before {
    left: -36px;
    position: absolute;
    text-align: right;
    width: 30px;
  }
  .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before {
    position: absolute;
    right: -36px;
    text-align: left;
    width: 30px;
  }
  .public-DraftStyleDefault-orderedListItem:before {
    content: counter(ol0) '. ';
    counter-increment: ol0;
  }
  .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before {
    content: counter(ol1, lower-alpha) '. ';
    counter-increment: ol1;
  }
  .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before {
    content: counter(ol2, lower-roman) '. ';
    counter-increment: ol2;
  }
  .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before {
    content: counter(ol3) '. ';
    counter-increment: ol3;
  }
  .public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before {
    content: counter(ol4, lower-alpha) '. ';
    counter-increment: ol4;
  }
  .public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset {
    counter-reset: ol0;
  }
  .public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset {
    counter-reset: ol1;
  }
  .public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset {
    counter-reset: ol2;
  }
  .public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset {
    counter-reset: ol3;
  }
  .public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset {
    counter-reset: ol4;
  }
  /**
   * Copyright (c) Facebook, Inc. and its affiliates. All rights reserved.
   *
   * This file provided by Facebook is for non-commercial testing and evaluation
   * purposes only. Facebook reserves all rights not expressly granted.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
   * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
   * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
   * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   */

  .RichEditor-root {
    background: #fff;
    border: 1px solid #ddd;
    font-family: 'Georgia', serif;
    font-size: 14px;
    padding: 15px;
  }

  .RichEditor-editor {
    border-top: 1px solid #ddd;
    cursor: text;
    font-size: 16px;
    margin-top: 10px;
  }

  .RichEditor-editor .public-DraftEditorPlaceholder-root,
  .RichEditor-editor .public-DraftEditor-content {
    margin: 0 -15px -15px;
    padding: 15px;
  }

  .RichEditor-editor .public-DraftEditor-content {
    min-height: 100px;
  }

  .RichEditor-hidePlaceholder .public-DraftEditorPlaceholder-root {
    display: none;
  }

  .RichEditor-editor .RichEditor-blockquote {
    border-left: 5px solid #eee;
    color: #666;
    font-family: 'Hoefler Text', 'Georgia', serif;
    font-style: italic;
    margin: 16px 0;
    padding: 10px 20px;
  }

  .RichEditor-editor .public-DraftStyleDefault-pre {
    background-color: rgba(0, 0, 0, 0.05);
    font-family: 'Inconsolata', 'Menlo', 'Consolas', monospace;
    font-size: 16px;
    padding: 20px;
  }

  .RichEditor-controls {
    font-family: 'Helvetica', sans-serif;
    font-size: 14px;
    margin-bottom: 5px;
    user-select: none;
  }

  .RichEditor-styleButton {
    color: #999;
    cursor: pointer;
    margin-right: 16px;
    padding: 2px 0;
    display: inline-block;
  }

  .RichEditor-activeButton {
    color: #5890ff;
  }
`

export default function DraftRenderer({ rawContentBlock }) {
  const contentState = convertFromRaw(rawContentBlock)
  const editorState = EditorState.createWithContent(contentState, decorators)

  return (
    <Wrapper>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <Editor
        editorState={editorState}
        readOnly
        customStyleMap={styleMap}
        blockRendererFn={blockRendererFn}
        blockStyleFn={getBlockStyle}
      />
    </Wrapper>
  )
}
