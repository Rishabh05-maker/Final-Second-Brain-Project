import AddCategoryFormWrapper from "../../category/Add/AddCategoryFormWrapper"
import CategoryLisitingWrapper from "../../category/List/CategoryLisitingWrapper"
import ActionToggleButton from "../../components/actiontogglebutton/ActionToggleButton"
import HomeHeader from "../../components/header/HomeHeader"





const HomeLayout = () => {

  

  return (
<>

<HomeHeader/>
<ActionToggleButton/>
<CategoryLisitingWrapper/>
</>

  )
}

export default HomeLayout