import React from 'react';
import PropTypes from 'prop-types';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import {PanGestureHandler, RectButton} from 'react-native-gesture-handler';
import {usePanGestureHandler} from 'react-native-redash';
import Animated from 'react-native-reanimated';
import {useSpring} from 'src/hooks/useSpring';
import Icon from '../Icon';
import {Text} from 'src/styles/theme';
import {useNavigation} from '@react-navigation/native';

const Layout = ({children, image, ComponentForm}) => {
  const {gestureHandler, translation, velocity, state} = usePanGestureHandler();
  const {goBack} = useNavigation();
  const translateY = useSpring({
    value: translation.y,
    velocity: velocity.y,
    state,
    snapPoints: [-300, 0],
  });

  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={[
            {
              ...StyleSheet.absoluteFillObject,
            },
            {transform: [{translateY}]},
          ]}>
          <RectButton
            onPress={goBack}
            style={{zIndex: 2, position: 'absolute', top: 64, left: 16}}>
            <Icon name="chevron-left" size={40} />
          </RectButton>
          {image && (
            <Image
              source={image}
              style={{
                ...StyleSheet.absoluteFillObject,
                width: undefined,
                height: undefined,
                borderRadius: 30,
                resizeMode: 'cover',
              }}
            />
          )}
          {children}
        </Animated.View>
      </PanGestureHandler>
      {ComponentForm}
    </SafeAreaView>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.any,
  ComponentForm: PropTypes.node,
};
Layout.defaultProps = {
  image: undefined,
  ComponentForm: undefined,
};

export default Layout;
