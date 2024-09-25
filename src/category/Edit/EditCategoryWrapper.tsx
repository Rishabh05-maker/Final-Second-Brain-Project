import { object, string } from 'yup';
import { Form, Formik } from 'formik';
import { useEditCategoryMutation, useGetSingleCategoryQuery } from '../../slice/CategorySlice';
import { useParams, useSearchParams } from 'react-router-dom';
import AddCategoryForm from '../layout/AddCategoryForm';

const EditCategoryWrapper = () => {
  const { id } = useParams();
  const [queryParams] = useSearchParams();
  const categoryNameFromParams = queryParams.get('categoryName');
  const [editCategory] = useEditCategoryMutation();
  

  const { data: categoryData, isLoading } = useGetSingleCategoryQuery(id);
  
 
  console.log('Fetched category data:', categoryData);

  const validationSchema = object({
    categoryName: string().required('Enter category name'),
  });

  const handleSubmit = async (values: { categoryName: string }) => {
    try {
      const response = await editCategory({ id, categoryName: values.categoryName }).unwrap();
      console.log('Category updated successfully:', response);
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };


  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Formik
      initialValues={{ categoryName: categoryData?.categoryName || categoryNameFromParams || '' }} 
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize 
    >
      {(formikProps) => (
        <Form>
          <AddCategoryForm buttonName="Update category" formikProp={formikProps} />
        </Form>
      )}
    </Formik>
  );
};

export default EditCategoryWrapper;
