/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import * as React from 'react';
import { Flex, Text, Box, Link, Button } from 'rebass';

const NavContainerCSS = css`
  .nav-container {
    max-width: 740px;
    margin: 20px auto;
  }
`;

const Header: React.SFC = ({ onClick }: any) => {
  return (
    <div css={NavContainerCSS}>
      <div className="nav-container">
        <Flex pt={2} color="black" bg="white" alignItems="center">
          <Text fontWeight="bold" fontSize="20px">
            Paper
          </Text>
          <Box mx="auto" />
          <Link variant="nav" href="#!" mr={3}>
            <Text fontSize={12}>View Notes</Text>
          </Link>
          <Link variant="nav" href="#!">
            <Button variant="primary" mr={2} bg="#0382a8" onClick={onClick}>
              <Text fontSize={12}>Publish</Text>
            </Button>
          </Link>
        </Flex>
      </div>
    </div>
  );
};

export default Header;
