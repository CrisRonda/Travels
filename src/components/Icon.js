import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const CustomIcon = ({size, name, color}) => {
  return <Icon name={name} size={size} color={color} />;
};
CustomIcon.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string,
  color: PropTypes.string,
};
CustomIcon.defaultProps = {
  size: 24,
  name: 'home',
  color: 'white',
};
export default CustomIcon;
