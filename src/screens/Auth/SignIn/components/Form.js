import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {useFormik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {Box, Button, Text, TextInput} from 'src/components/';
const Form = (params) => {
  const initialValues = {
    email: '',
    password: '',
  };
  const passwordRef = useRef(null);
  const {navigate} = useNavigation();
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
      height={300}
      bottom={0}
      left={0}
      zIndex={-1}
      alignSelf="flex-end"
      p="l"
      justifyContent="space-between"
      alignItems="center"
      flex={1}>
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
      <Text textAlign="center" color="text" mb="s">
        Olvidaste tu contraseña
      </Text>
      <Button label="Iniciar sesión" variant="primary" />
    </Box>
  );
};
Form.propTypes = {};
Form.defaultProps = {};
export default Form;
