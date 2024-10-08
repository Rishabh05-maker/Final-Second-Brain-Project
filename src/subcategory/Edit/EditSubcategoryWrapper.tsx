import { object, string } from 'yup'
import { Form, Formik, FormikHelpers } from 'formik'
import { useParams } from 'react-router-dom'
import AddSubcategoryForm from '../layout/AddSubcategoryForm'
import { useEditSubcategoryMutation, useGetSingleSubcategoryQuery } from '../../slice/SubcategorySlice'

const EditSubcategoryWrapper = () => {
  const { id } = useParams()
  const [editSubcategory] = useEditSubcategoryMutation()
  const { data } = useGetSingleSubcategoryQuery(id)


  const initialValues = {
    subcategoryName: data?.data.subcategoryName||""  
  }

  const validationSchema = object({
    subcategoryName: string().required("Enter subcategory name")
  })

  const handleSubmit = (values: any, { setSubmitting }: FormikHelpers<any>) => {
    editSubcategory({ data: values, id }).then((res) => {
      console.log(res)
      setSubmitting(false)
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}  // Allow form reinitialization when data changes
    >
      {
        (formikProp) => (
          <Form>
            <AddSubcategoryForm buttonName={"Edit category"} formikProp={formikProp} heading={"Edit category"} />
          </Form>
        )
      }
    </Formik>
  )
}

export default EditSubcategoryWrapper
