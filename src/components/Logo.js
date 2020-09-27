import React from 'react';
import {Text, Box} from 'src/styles/theme';
import ImageLogo from './SVG/Logo';

const Logo = ({flex, row = true}) =>
  row ? (
    <Box
      flex={flex}
      width="100%"
      pt="xl"
      flexDirection="row"
      alignSelf="center"
      alignItems="center"
      justifyContent="center">
      <Text variant="h6">find</Text>
      <ImageLogo size={22} />
      <Text variant="h6">ut</Text>
    </Box>
  ) : (
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
