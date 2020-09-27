import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {useFormik} from 'formik';
import {Box, Button, Text, TextInput} from 'src/components/';
import Checkbox from 'src/components/Checkbox';
import {useNavigation} from '@react-navigation/native';

const Form = () => {
  const {navigate} = useNavigation();
  const initialValues = {
    name: '',
    email: '',
    password: '',
    terms: false,
  };
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: (value, setSubmitting) => onSubmit(value, setSubmitting),
  });
  const onSubmit = (value, setSubmitting) => {
    alert('Home');
  };
  return (
    <Box
      position="absolute"
      width="100%"
      height={400}
      bottom={0}
      left={0}
      zIndex={-1}
      alignSelf="flex-end"
      p="l"
      pb="xl"
      justifyContent="space-between"
      alignItems="center"
      flex={1}>
      <TextInput
        icon="account"
        placeholder="Nombre"
        onChangeText={handleChange('name')}
        onBlur={handleBlur('name')}
        error={errors.name}
        touched={touched.name}
        autoCapitalize="words"
        autoCompleteType="name"
        returnKeyType="next"
        returnKeyLabel="next"
      />
      <TextInput
        icon="mail"
        placeholder="Correo electrónico"
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        error={errors.email}
        touched={touched.email}
        autoCapitalize="none"
        autoCompleteType="email"
        returnKeyType="next"
        returnKeyLabel="next"
      />
      <TextInput
        icon="lock"
        placeholder="Contraseña"
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        error={errors.password}
        touched={touched.password}
        autoCapitalize="none"
        autoCompleteType="password"
        returnKeyType="next"
        returnKeyLabel="next"
      />
      <Checkbox
        checked={values.terms}
        label="Aceptar"
        emphasis="términos y condiciones"
        onChange={() => setFieldValue('terms', !values.terms)}
      />
      <Button
        label="Crear cuenta"
        variant="primary"
        onPress={() => navigate('Home')}
      />
    </Box>
  );
};
Form.propTypes = {};
Form.defaultProps = {};
export default Form;
