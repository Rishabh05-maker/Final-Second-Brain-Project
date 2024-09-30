import { object, string } from 'yup'
import { Form, Formik, FormikHelpers} from 'formik'
import { } from '../../slice/CategorySlice'
import { useParams } from 'react-router-dom'
import AddSubcategoryForm from '../layout/AddSubcategoryForm'
import { useEditSubcategoryMutation, useGetSingleSubcategoryQuery } from '../../slice/SubcategorySlice'

const EditSubcategoryWrapper = () => {


const {id}=useParams()

const [editSubcategory]= useEditSubcategoryMutation()


const{data}= useGetSingleSubcategoryQuery(id)


const initialValues = {
    subcategoryName:  "helod"
}
const validationSchema = object({
    subcategoryName: string().required("Enter subcategory name")
})

const handleSubmit = (vlaues: any, {setSubmitting }:FormikHelpers<any> ) => {
  const data =vlaues
  editSubcategory({data,id}).then((res)=>{
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
      <Form> <AddSubcategoryForm buttonName={"Edit category"}  formikProp = {formikProp} heading={"Edit category"}/> </Form>
      )
    }
  }
  </Formik>   
  )
}

export default EditSubcategoryWrapper
