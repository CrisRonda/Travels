import React from 'react';
import {SafeAreaView} from 'react-native';
import {Box, ButtonOutline, Text, Logo} from 'src/components';
import BackgroundImage from './components/BackgroundImage';
import {backgroundImage} from 'src/constans';
import {useNavigation} from '@react-navigation/native';

const Index = () => {
  const {navigate} = useNavigation();
  return (
    <Box flex={1} alignItems="center" justifyContent="space-around" p="xl">
      <BackgroundImage time={1500} images={backgroundImage} />
      <SafeAreaView style={{flex: 1, width: '100%'}}>
        <Logo flex={1 / 3} />
        <Box
          flex={1}
          width="100%"
          mt="xl"
          justifyContent="center"
          alignItems="flex-start">
          <Text variant="h2" color="white">
            Bienvenido
          </Text>
          <Text color="white">Descubre más!</Text>
        </Box>
        <Box
          flex={1 / 3}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around">
          <ButtonOutline
            enableDecoration
            label="Inicial sesión"
            onPress={() => navigate('SignIn')}
          />
          <ButtonOutline label="Registrar" onPress={() => navigate('SignUp')} />
        </Box>
      </SafeAreaView>
    </Box>
  );
};
Index.propTypes = {};
Index.defaultProps = {};
export default Index;
