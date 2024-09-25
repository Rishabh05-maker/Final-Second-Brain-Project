import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import AddSubcategoryWrapper from "../../subcategory/add/AddSubcategoryWrapper";

interface Category {
  id: number;
  categoryName: string;
}

interface Props {
  data: {
    data: Category[];
  };
}


const CategoryListing = ({data, deleteCategory}: Props) => {

  return (
      <div className="grid lg:grid-cols-3 grid-cols-1 w-full gap-2 mt-8  ">
      {data?.data.map((category) => {
        return (
          
          <div className="flex-1 bg-white p-4 rounded shadow-lg border border-pink-100 " key={category.id}>
            <h1 className="text-2xl text-slate-600 font-serif m-2 flex justify-between">{category.categoryName}
            <div>
              
            <Link to={`/edit-category/${category._id}?categoryName/${category.categoryName}`}> <button className="text-green-500"><CiEdit /></button></Link>

            <button onClick={()=> deleteCategory(category._id) }  className="text-red-400 ml-2"><MdDeleteForever /></button>
            </div>
            </h1>
            <hr />

            {/* <AddSubcategoryWrapper/> */}
          </div>
         
        );
      })}
   </div>
  );
};


export default CategoryListing

