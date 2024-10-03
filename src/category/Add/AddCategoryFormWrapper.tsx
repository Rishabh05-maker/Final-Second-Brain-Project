
import { object, string } from 'yup'
import { useAddCategoryMutation } from '../../slice/CategorySlice'
import { Form, Formik} from 'formik'
import AddCategoryForm from '../layout/AddCategoryForm'
import { useNavigate } from 'react-router-dom'



const AddCategoryFormWrapper = () => {

const [AddCategory] = useAddCategoryMutation()
const navigate = useNavigate()


const initialValues = {
  categoryName: ""
}
const validationSchema = object({
  categoryName: string().required("Enter category name")
})

const handleSubmit = (vlaues: any,  ) => {

  AddCategory(vlaues).then ((res)=>{
   
   if(res.data){
     navigate("/home")
     
    }
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
      <Form> <AddCategoryForm buttonName={"Add category"}  heading={"Add category"} formikProp = {formikProp}/> </Form>
      )
    }
  }
  </Formik>   
  )
}

export default AddCategoryFormWrapper
































