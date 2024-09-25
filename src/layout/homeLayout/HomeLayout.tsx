import AddCategoryFormWrapper from "../../category/Add/AddCategoryFormWrapper"
import CategoryLisitingWrapper from "../../category/List/CategoryLisitingWrapper"
import HomeHeader from "../../components/header/HomeHeader"
import AddSubcategoryWrapper from "../../subcategory/add/AddSubcategoryWrapper"








const HomeLayout = () => {



  return (
<>

<HomeHeader/>
<AddCategoryFormWrapper/>
<CategoryLisitingWrapper/>
</>

  )
}

export default HomeLayout