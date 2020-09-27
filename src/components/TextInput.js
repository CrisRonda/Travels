import React, {forwardRef} from 'react';
import {Box} from 'src/styles/theme';
import {TextInput, StyleSheet} from 'react-native';
import {useTheme} from '@shopify/restyle';
import Icon from './Icon';

const TextInputRN = forwardRef(
  ({placeholder, icon, error, touched, ...props}, ref) => {
    const theme = useTheme();
    const validColor = !touched ? 'darkGray' : !error ? 'primary' : 'danger';
    const color = theme.colors[validColor];

    return (
      <Box
        flexDirection="row"
        height={56}
        borderRadius="s"
        borderColor={validColor}
        borderWidth={StyleSheet.hairlineWidth}
        alignItems="center"
        p="s"
        mb="m">
        <Box p="s">
          <Icon name={icon} size={24} color={color} />
        </Box>
        <Box flex={1}>
          <TextInput
            {...{ref}}
            underlineColorAndroid="transparent"
            placeholderTextColor={color}
            placeholder={placeholder}
            {...props}
          />
        </Box>
        {touched && (error ? <Icon name="x" /> : <Icon name="check" />)}
      </Box>
    );
  },
);
export default TextInputRN;
