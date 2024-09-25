import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import Login from './Login';
import { useLoginMutation } from '../slice/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginWrapper = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const initialValues = {
    userName: '',
    password: '',
  };

  const validationSchema = object({
    userName: string().min(5,"Username must be at least 5 characters").required('Enter your username'),
    password: string().min(8, "Password must be at least 8 characters").required('Enter your password'),
  });

  const handleSubmit = async (values: any) => {
    try {
      const response = await login(values).unwrap(); 
      const authToken = response?.data?.token;

      if (authToken) {
        localStorage.setItem('authToken', authToken);
        navigate('/home');
        toast.success('Logged in successfully');
      } else {
        toast.error('Login failed: Invalid token received');
      }
    } catch (error) {
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <Form>
          <Login formikProps={formikProps} />
        </Form>
      )}
    </Formik>
  );
};

export default LoginWrapper;
