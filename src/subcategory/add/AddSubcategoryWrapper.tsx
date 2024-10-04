import { object, string } from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import { useNavigate} from 'react-router-dom'; 
import AddSubcategoryForm from '../layout/AddSubcategoryForm';
import { useAddSubcategoryMutation } from '../../slice/SubcategorySlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddSubcategoryWrapper = ({categoryId}) => {
  
  const [AddSubcategory] = useAddSubcategoryMutation();
  const navigate = useNavigate();

  const initialValues = {
    subcategoryName: '',
    categoryId
  };

  const validationSchema = object({
    subcategoryName: string().required('Enter subcategory name'),
  });

  const handleSubmit = (values: any, {setSubmitting}:FormikHelpers<any>) => {
    AddSubcategory(values).then((res) => {
      if (res.data) {
        toast.success('Subcategory added successfully!');
        navigate('/home');
        setSubmitting(false)
      } else {
        toast.error('Failed to add subcategory. Please try again.');
      }
    }).catch(() => {
      toast.error('An error occurred. Please try again later.');
    });
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {(formikProp) => (
          <Form>
            <AddSubcategoryForm formikProp={formikProp} />
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
};

export default AddSubcategoryWrapper;
