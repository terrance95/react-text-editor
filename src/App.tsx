import { Global, css } from '@emotion/core';

import React, { Fragment } from 'react';
import EditorScreen from './screens/EditorScreen';

function App() {
  return (
    <Fragment>
      <Global
        styles={css`
          body {
            width: 100%;
            height: 100%;
            margin: 0 auto;
          }
        `}
      />
      <EditorScreen />
    </Fragment>
  );
}

export default App;
