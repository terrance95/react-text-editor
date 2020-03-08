import React, { Fragment, useEffect } from 'react';
import Header from '../components/Layout/Header';
import Editor from '../components/Editor/Editor';
import Container from '../components/Layout/Container';

const EditorScreen: React.FC = () => {
  return (
    <Fragment>
      <Container>
        <Editor />
      </Container>
    </Fragment>
  );
};

export default EditorScreen;
