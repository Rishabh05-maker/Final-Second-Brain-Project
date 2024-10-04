import { object, string } from 'yup'
import { useAddCategoryMutation } from '../../slice/CategorySlice'
import { Form, Formik, FormikHelpers } from 'formik'
import AddCategoryForm from '../layout/AddCategoryForm'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddCategoryFormWrapper = () => {
  const [AddCategory] = useAddCategoryMutation()
  const navigate = useNavigate()

  const initialValues = {
    categoryName: ""
  }

  const validationSchema = object({
    categoryName: string().required("Enter category name")
  })

  const handleSubmit = (values: any, { setSubmitting }: FormikHelpers<any>) => {
    AddCategory(values).then((res) => {
      if (res.data) {
        toast.success("Category added successfully!")
        navigate("/home")
        setSubmitting(false)
      } else {
        toast.error("Failed to add category. Please try again.")
      }
    }).catch(() => {
      toast.error("An error occurred. Please try again.")
    })
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {
          (formikProp) => {
            return (
              <Form>
                <AddCategoryForm buttonName={"Add category"} heading={"Add category"} formikProp={formikProp} />
              </Form>
            )
          }
        }
      </Formik>
      <ToastContainer />
    </>
  )
}

export default AddCategoryFormWrapper
