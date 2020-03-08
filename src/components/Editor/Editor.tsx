/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useEffect, useRef, useCallback } from 'react';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS, initialData } from './tools';
import Header from '../Layout/Header';
import { createNote } from '../../utils/index';
const EditorCSS = css`
  input {
    width: 100%;
    border: 0;
  }
  input:focus {
    outline: none;
  }
  input[placeholder] {
    font-size: 1.953em;
  }

  textarea {
    resize: none;
    width: 100%;
    font-size: 1.953em;
  }

  .ce-block__content {
    max-width: 100%;
  }
  .ce-toolbar__content {
    max-width: 100%;
    margin: 0 auto;
    position: relative;
  }

  .ce-block--focused {
    background-image: none;
  }
  .editor-wrapper {
    margin-top: 40px;
  }
`;

const Editor: React.FC = () => {
  const sendToApi = (data: object) =>
    createNote(data).then(() => console.log(true).catch(e => console.log(e)));

  const editorJsRef = React.useRef(null);

  const handleSave = React.useCallback(async () => {
    const savedData = await editorJsRef.current.save();
    console.log(savedData.blocks[0].data.text);
    return sendToApi(savedData);
  }, []);

  return (
    <>
      <Header onClick={handleSave} />
      <div css={EditorCSS}>
        <div className="editor-wrapper">
          <EditorJs
            tools={EDITOR_JS_TOOLS}
            instanceRef={instance => (editorJsRef.current = instance)}
            data={initialData}
          />
        </div>
      </div>
    </>
  );
};

export default Editor;
