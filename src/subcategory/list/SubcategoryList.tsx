import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

interface Subcategory {
  _id: string;
  subcategoryName: string;
  categoryId: string; // Include categoryId in the subcategory interface if needed
}

interface Props {
  data: Subcategory[];
  categoryId: string; // Add categoryId as a prop
}

const SubcategoryList = ({ data, categoryId }: Props) => {
  return (
    <div>
      {data?.data?.subCategories.map((subcategory) => (
        <div key={subcategory._id} className="flex justify-between items-center p-2 border-b">
          <span>{subcategory.subcategoryName}</span>
          <div>
            <button className="text-green-500">
              <CiEdit />
            </button>
            <button className="text-red-400 ml-2">
              <MdDeleteForever />
            </button>
          </div>
        </div>
      ))}
      {/* You can display categoryId if necessary */}
      <p>Category ID: {categoryId}</p>
    </div>
  );
};

export default SubcategoryList;
