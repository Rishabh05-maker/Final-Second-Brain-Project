import React from 'react';
import AtmTextField from "../../components/atoms/AtmTextField";
import { ErrorMessage } from "formik";

interface AddCategoryFormProps {
  values: {
    categoryName: string;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting: boolean;
  buttonName: string;
}

const AddCategoryForm: React.FC<AddCategoryFormProps> = ({ values, handleChange, isSubmitting, buttonName }) => {
  return (
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Add Category</h2>

      <AtmTextField
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
        name="categoryName"
        placeholder="Enter category name"
        value={values.categoryName}
        onChange={handleChange}
      />

      {/* Error message */}
      <p className="mt-1 text-red-600 text-sm">
        <ErrorMessage name="categoryName" />
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`mt-6 w-full py-2 px-4 rounded-lg text-white font-semibold transition-all
          ${isSubmitting ? "bg-pink-300 cursor-not-allowed" : "bg-pink-500 hover:bg-pink-600"}
        `}
      >
        {isSubmitting ? "Submitting..." : buttonName}
      </button>
    </div>
  );
};

export default AddCategoryForm;
