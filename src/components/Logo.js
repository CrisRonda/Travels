import React from 'react';
import {Text, Box} from 'src/styles/theme';
import ImageLogo from './SVG/Logo';

const Logo = ({flex}) => (
  <Box
    flex={flex}
    width="60%"
    alignSelf="center"
    alignItems="center"
    justifyContent="center">
    <Text mt="xl" variant="h1">
      find
    </Text>
    <Box width="100%" justifyContent="flex-end" flexDirection="row">
      <ImageLogo />
      <Text variant="h1" style={{marginTop: -10, marginLeft: -4}}>
        ut
      </Text>
    </Box>
  </Box>
);

export default Logo;
