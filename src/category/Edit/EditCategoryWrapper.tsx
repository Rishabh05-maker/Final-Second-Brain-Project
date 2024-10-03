
import { object, string } from 'yup'
import { Form, Formik, FormikHelpers} from 'formik'
import AddCategoryForm from '../layout/AddCategoryForm'
import { useEditCategoryMutation, useGetSingleCategoryQuery } from '../../slice/CategorySlice'
import { useParams } from 'react-router-dom'


const EditCategoryWrapper = () => {
const {id}=useParams()
const [editCategory]=useEditCategoryMutation()
const{data}=useGetSingleCategoryQuery(id)

const initialValues = {
  categoryName: data?.data.categoryName|| " "
}
const validationSchema = object({
  categoryName: string().required("Enter category name")
})

const handleSubmit = (vlaues: any, {setSubmitting }:FormikHelpers<any> ) => {
  const data =vlaues
  
editCategory({data,id}).then((res)=>{
  console.log(res)
  setSubmitting(false)
  
})
}

  return (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
    enableReinitialize={true}
  > 
  {
    (formikProp) => {
      return (
      <Form> <AddCategoryForm buttonName={"Edit category"} formikProp = {formikProp} heading={"Edit category"}/> </Form>
      )
    }
  }
  </Formik>   
  )
}

export default EditCategoryWrapper































