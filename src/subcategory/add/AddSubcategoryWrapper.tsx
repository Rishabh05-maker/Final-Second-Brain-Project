import { object, string } from 'yup';
import { Form, Formik } from 'formik';
import { useNavigate} from 'react-router-dom'; 
import AddSubcategoryForm from '../layout/AddSubcategoryForm';
import { useAddSubcategoryMutation } from '../../slice/SubcategorySlice';

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

  const handleSubmit = (values: any) => {
    AddSubcategory(values).then((res) => {
      if (res.data) {
        navigate('/home');
      }
    });
  };

  return (
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
  );
};

export default AddSubcategoryWrapper;






