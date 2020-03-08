/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';

const ContainerCSS = css`
  .app-container {
    width: 100%;
  }
  #document {
    background: white;
    width: 700px;
    /* box-shadow: rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
    margin: 20px auto;
    padding: 0px 0px;
  }
`;

const Container: React.FC = ({ children }) => {
  return (
    <div css={ContainerCSS}>
      <div className="app-container">
        <div id="document"> {children}</div>
      </div>
    </div>
  );
};

export default Container;
