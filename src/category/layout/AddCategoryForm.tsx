import AtmTextField from "../../components/atoms/AtmTextField";
import { ErrorMessage } from "formik";

const AddCategoryForm = ({formikProp, buttonName ,heading}: Props) => {
  const {values,handleChange,isSubmitting}=formikProp

  return (
    <div className="flex justify-start gap-3 mt-4 ml-4 m-auto">

      {/* Category input field */}
      <div className="border-1 bg-gray-300 rounded-lg shadow-lg font-serif p-5">
      <h1 className="text-center">{heading}</h1>
        <AtmTextField
          className="border-pink-300 w-full"
          name="categoryName"
          placeholder="Category name"
          label=" Category name"
          vlaue={values.categoryName}
          onChange={handleChange}
        />
        <p className="text-red-500 text-sm">
          <ErrorMessage name="categoryName" />
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="border-2 rounded bg-pink-400 mt-2 text-white w-full p-1"
        >
          {isSubmitting ? "Submitting" : buttonName}
        </button>
      </div>
    </div>
  );
};
export default AddCategoryForm;
