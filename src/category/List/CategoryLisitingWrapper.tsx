import { useNavigate } from 'react-router-dom';
import {  useDeleteCategoryMutation, useGetCategoryQuery } from '../../slice/CategorySlice'
import CategoryListing from './CategoryListing'

const CategoryLisitingWrapper = () => {
const navigate=useNavigate()
 const {data, isLoading, error} = useGetCategoryQuery();

 const [deleteCategory] = useDeleteCategoryMutation()


 
if(isLoading){
  
  return <p>Loading.....</p>
}

if(error){
  return <p>Error loading categories</p>
}

const handleDeleteCategory = (_id) => {
  deleteCategory(_id).then((res)=>{
    console.log(res)
  }).catch(err =>{
    console.error("Error deleting category:", err)
    })
}
const handleEdit=(_id)=>{
navigate(`/edit-category/${_id}`)
}



  return (
   <>
    { data ?  <CategoryListing data={data} handleEdit={handleEdit} deleteCategory={handleDeleteCategory}  /> : <p>No categories available</p> }
   </>
  )
}

export default CategoryLisitingWrapper