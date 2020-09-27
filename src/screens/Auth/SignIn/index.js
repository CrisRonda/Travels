import React from 'react';
import PropTypes from 'prop-types';
import {backgroundImage} from 'src/constans';
import {Box, LayoutBackground, Logo, Text, Icon} from 'src/components';
import Form from './components/Form';
const SignIn = () => {
  return (
    <LayoutBackground image={backgroundImage[0]} ComponentForm={<Form />}>
      <Box flex={1} justifyContent="flex-end" pb="xl">
        <Logo />
      </Box>
      <Box flex={1 / 3} alignItems="center" justifyContent="flex-end">
        <Text variant="h5" marginBottom="m">
          Iniciar sesión
        </Text>
        <Text marginBottom="m" color="white">
          Desliza para ir iniciar sesión
        </Text>
        <Icon name="chevron-up" />
      </Box>
    </LayoutBackground>
  );
};
SignIn.propTypes = {};
SignIn.defaultProps = {};
export default SignIn;
