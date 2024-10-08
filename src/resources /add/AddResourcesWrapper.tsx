import React from 'react';
import AddResourcesForm from '../layout/AddResourcesForm';
import { Formik } from 'formik';
import { useAddResourcesMutation } from '../../slice/ResourceSlice';
import {useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddResourcesWrapper() {
  const { subcategoryId } = useParams();
  const [addResources] = useAddResourcesMutation();

  const initialValues = {
    name: '',
    resourceLink: '',
    description: '',
    subcategoryId: subcategoryId,
  };

  const handleSubmit = (values: any) => {
    addResources({
      name: values.name,
      description: values.description,
      subcategoryId: values.subcategoryId,
      link: values.resourceLink,
    })
      .then((response: any) => {
        toast.success('Resource added successfully!');
         
         
        console.log('Success:', response);
      })
      .catch((error: any) => {
        toast.error('Failed to add resource!');
        console.error('Failed to add resource:', error);
      });
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {formikProps => (
          <form onSubmit={formikProps.handleSubmit}>
            <AddResourcesForm formikProps={formikProps} />
          </form>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
}

export default AddResourcesWrapper;
