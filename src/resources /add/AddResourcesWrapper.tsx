import React from 'react';
import AddResourcesForm from '../layout/AddResourcesForm';
import { Formik } from 'formik';
import { useAddResourcesMutation } from '../../slice/ResourceSlice';
import { useParams } from 'react-router-dom';


function AddResourcesWrapper() {
  const {subcategoryId} = useParams()
  const [addResources] = useAddResourcesMutation()

  const initialValues = {
    name: '',
    resourceLink: '',
    description: '',
    subcategoryId: subcategoryId
  };

  const handleSubmit = (values: any) => {
    addResources({
      name: values.name,
      description: values.description,
      subcategoryId: values.subcategoryId, 
      link: values.resourceLink,
    })
      .then((response: any) => {
        console.log('Success:', response);
  
      })
      .catch((error: any) => {
        console.error('Failed to add resource:', error);
      });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {formikProps => (
        <form onSubmit={formikProps.handleSubmit}>
          <AddResourcesForm formikProps={formikProps} />
        </form>
      )}
    </Formik>
  );
}

export default AddResourcesWrapper;
