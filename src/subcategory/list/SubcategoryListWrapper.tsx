import { useGetSubcategoryQuery } from "../../slice/SubcategorySlice";
import SubcategoryList from "./SubcategoryList";

interface Props {
  categoryId: string; // Define the prop type for categoryId
}

const SubcategoryListWrapper = ({ categoryId }: Props) => {
  const { data, isLoading, error } = useGetSubcategoryQuery(categoryId); // Use the categoryId to fetch subcategories


  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (error) {
    return <p>Error loading subcategories: {error.message}</p>; // Show error message
  }

  return (
    <>
      {data ? <SubcategoryList data={data} categoryId={categoryId} /> : <p>No subcategories available</p>}
    </>
  );
};

export default SubcategoryListWrapper;
