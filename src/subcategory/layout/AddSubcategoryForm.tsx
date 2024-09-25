import ActionToggleButton from "../../components/actiontogglebutton/ActionToggleButton";
import AtmTextField from "../../components/atoms/AtmTextField";
import { IoIosAddCircle } from "react-icons/io";


const AddSubcategoryForm = () => {

  


  return (
    <div className=" flex justify-start  gap-3 mt-4 ml-4 m-auto">
      {/* Category input field */}
      <button
            type="submit"
            className="flex items-center gap-1 text-gray-700 hover:text-gray-900"
          >
            <IoIosAddCircle className="text-slate-600" />
          </button>
        <AtmTextField
          className="border-pink-300  p-0 w-full placeholder:text-sm  "
          name="categoryName"
          placeholder="Enter subcategory name"
          label=""
        />
       <ActionToggleButton/>
    </div>




  );
};
export default AddSubcategoryForm