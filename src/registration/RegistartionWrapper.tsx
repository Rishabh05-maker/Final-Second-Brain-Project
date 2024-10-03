import React from 'react';
import Registration from './Registration';
import { useRegistrationMutation } from '../slice/AuthSlice';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'; // Import Yup for validation
import { useNavigate } from 'react-router-dom';

const RegistrationWrapper = () => {
  const [registration] = useRegistrationMutation();
  const navigate = useNavigate()
  const initialValues = {
    name: "",
    userName: "",
    password: "",
    confirmPassword: "",
  };


  const validationSchema = Yup.object({
    name: Yup.string().min(2).required('Name is required'),
    userName: Yup.string().min(3).max(20).matches(/^[a-zA-Z0-9_]+$/).required('Username is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });


  const handleSubmit = (values, actions) => {
    registration(values)
      .then((res) => {

        actions.resetForm();
        const authToken = res.data.token
        console.log(authToken)
        localStorage.setItem("authToken", authToken )
        
            if (authToken){
            
                navigate("/home")
            }
      })
      .catch((error) => {
        
        console.error('Registration failed:', error);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <Form>
          <Registration formikProps={formikProps} />
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationWrapper;
