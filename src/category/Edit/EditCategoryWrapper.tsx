import { object, string } from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import AddCategoryForm from '../layout/AddCategoryForm';
import { useEditCategoryMutation, useGetSingleCategoryQuery } from '../../slice/CategorySlice';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditCategoryWrapper = () => {
  const { id } = useParams();
  const [editCategory] = useEditCategoryMutation();
  const { data } = useGetSingleCategoryQuery(id);
  const navigate = useNavigate();

  const initialValues = {
    categoryName: data?.data.categoryName || ' ',
  };

  const validationSchema = object({
    categoryName: string().required('Enter category name'),
  });

  const handleSubmit = (values: any, { setSubmitting }: FormikHelpers<any>) => {
    const data = values;

    editCategory({ data, id })
      .then((res) => {
        if (res) {
          toast.success('Category edited successfully!');
          navigate('/home');
        }
      })
      .catch(() => {
        toast.error('Failed to edit category. Please try again.');
      })
      .finally(() => {
        setSubmitting(false);
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
        {(formikProp) => {
          return (
            <Form>
              <AddCategoryForm buttonName={'Edit category'} formikProp={formikProp} heading={'Edit category'} />
            </Form>
          );
        }}
      </Formik>
      <ToastContainer />
    </>
  );
};

export default EditCategoryWrapper;
