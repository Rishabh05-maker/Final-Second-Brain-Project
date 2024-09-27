
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
  > 
  {
    (formikProp) => {
      return (
      <Form> <AddCategoryForm buttonName={"Add category"} formikProp = {formikProp}/> </Form>
      )
    }
  }
  </Formik>   
  )
}

export default AddCategoryFormWrapper





// import React, { useState } from 'react';
// import { Formik, Form } from 'formik';
// import * as Yup from 'yup'; 
// import AddCategoryForm from '../layout/AddCategoryForm';

// const AddCategoryFormWrapper = () => {
//   const [showForm, setShowForm] = useState(false);

//   const toggleForm = () => {
//     setShowForm(!showForm);
//   };

//   const initialValues = {
//     categoryName: '',
//   };

//   const validationSchema = Yup.object({
//     categoryName: Yup.string().required("Category name is required"),
//   });

//   const handleSubmit = (values, { resetForm }) => {
//     console.log('Form Submitted:', values);
//     resetForm(); 
//     setShowForm(false); 
//   };

//   return (
//       <div className="flex flex-col justify-center items-start mt-6 space-y-6">
//         {/* Toggle Button */}
//         <button
//           onClick={toggleForm}
//           className="text-white border rounded-full bg-pink-400 w-[60px] h-[60px] text-2xl flex items-center justify-center ml-8 mb-4"
//         >
//           +
//         </button>

//       {/* Form Container */}
//       {showForm && (
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {formikProp => (
//             <Form>
//               <AddCategoryForm 
//                 values={formikProp.values}
//                 handleChange={formikProp.handleChange}
//                 isSubmitting={formikProp.isSubmitting}
//                 buttonName={"Add category"} 
//               />
//             </Form>
//           )}
//         </Formik>
//       )}
//     </div>
//   );
// };

// export default AddCategoryFormWrapper;




























