import { useNavigate } from "react-router-dom";
import { useDeleteSubcategoryMutation, useGetSubcategoryQuery } from "../../slice/SubcategorySlice";
import SubcategoryList from "./SubcategoryList";

interface Props {
  categoryId: string; // Define the prop type for categoryId
}

const SubcategoryListWrapper = ({ categoryId }: Props) => {
  const { data, isLoading, error } = useGetSubcategoryQuery(categoryId);
  const [deleteSubcategory] = useDeleteSubcategoryMutation()
  const navigate = useNavigate()


  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (error) {
    return <p>Error loading subcategories: {error.message}</p>; // Show error message
  }

const handleDeleteSubcateory = (_id) => {
  deleteSubcategory(_id).then((res)=>{
    console.log(res)
  }).catch(err =>{
    console.error("Error deleting category:", err)
    })
}
const handleEdit = (_id) => {
 navigate(`/edit-subcategory/${_id}`)
}

  return (
    <>
      {data ? <SubcategoryList data={data} categoryId={categoryId} handleEdit ={handleEdit} deletesubcategory ={handleDeleteSubcateory} /> : <p>No subcategories available</p>}
    </>
  );
};

export default SubcategoryListWrapper;
