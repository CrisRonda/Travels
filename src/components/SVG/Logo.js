import React from 'react';
import PropTypes from 'prop-types';
import {Svg, Path} from 'react-native-svg';

const Logo = ({size}) => {
  const width = size;
  const height = size * 1.01;
  return (
    <Svg width={width} height={height} viewBox={`0 0 43.815 43.823`}>
      <Path
        d="M43.22 37.888l-8.533-8.533a2.052 2.052 0 00-1.455-.6h-1.4a17.793 17.793 0 10-3.081 3.081v1.4a2.052 2.052 0 00.6 1.455l8.533 8.533a2.046 2.046 0 002.9 0l2.427-2.424a2.064 2.064 0 00.009-2.912zM17.8 28.756A10.955 10.955 0 1128.756 17.8 10.948 10.948 0 0117.8 28.756z"
        fill="#ff256c"
      />
    </Svg>
  );
};

Logo.propTypes = {
  size: PropTypes.number,
};
Logo.defaultProps = {
  size: 43,
};
export default Logo;
