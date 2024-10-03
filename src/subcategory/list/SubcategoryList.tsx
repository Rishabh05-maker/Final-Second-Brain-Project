import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";


interface Subcategory {
  _id: string;
  subcategoryName: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
}

interface Category {
  categoryId: string;
  categoryName: string;
  subCategories: Subcategory[];
}

interface Props {
  data: { data: Category[] }; 
  categoryId: string;
}

const SubcategoryList = ({ data, categoryId, deletesubcategory, handleEdit,  }: Props) => {

  const category = data.data.find((cat) => cat.categoryId === categoryId);

  return (
    <div>
   
      {category ? (
        category.subCategories.map((subcategory) => (
          <div key={subcategory._id} className="flex justify-between items-center p-2 border-b">
            <span> <Link to={`/resources/${subcategory._id}`}> {subcategory.subcategoryName} </Link>  </span>
            <div>
              <button className="text-green-500" onClick={()=>{handleEdit(subcategory._id)}}>
                <CiEdit />
              </button>

              <button onClick={()=>{deletesubcategory(subcategory._id)}} className="text-red-400 ml-2">
                <MdDeleteForever />
              </button>
             
            </div>
          </div>
          
        ))
      ) : (
        <p>No subcategories found for this category.</p>
      )}
      
    </div>
  );
};

export default SubcategoryList;
