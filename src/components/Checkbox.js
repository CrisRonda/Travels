import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text} from 'src/styles/theme';
import PropTypes from 'prop-types';
import Icon from './Icon';
import {BorderlessButton} from 'react-native-gesture-handler';
import {useTheme} from '@shopify/restyle';

const Checkbox = ({label, checked, onChange, emphasis, variant, mb}) => (
  <BorderlessButton
    style={{justifyContent: 'center', marginBottom: mb}}
    onPress={onChange}>
    <Box flexDirection="row" alignItems="center">
      <Box
        borderRadius="s"
        justifyContent="center"
        alignItems="center"
        borderWidth={StyleSheet.hairlineWidth}
        backgroundColor={checked ? 'primary' : 'white'}
        height={22}
        width={25}>
        {checked && <Icon name="check" color="white" />}
      </Box>
      <Text variant={variant} ml="s">
        {`${label} `}
      </Text>
      {emphasis && (
        <Text variant={variant} color="primary">
          {emphasis}
        </Text>
      )}
    </Box>
  </BorderlessButton>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  emphasis: PropTypes.string,
  variant: PropTypes.string,
  mb: PropTypes.number,
};

Checkbox.defaultProps = {
  emphasis: undefined,
  variant: undefined,
  mb: 8,
};

export default Checkbox;
