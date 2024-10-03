
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LoginWrapper from '../Login/LoginWrapper'

import CategoryLisitingWrapper from '../category/List/CategoryLisitingWrapper'
import EditCategoryWrapper from '../category/Edit/EditCategoryWrapper'
import HomeLayout from '../layout/homeLayout/HomeLayout'
import AddCategoryFormWrapper from '../category/Add/AddCategoryFormWrapper'
import AddSubcategoryWrapper from '../subcategory/add/AddSubcategoryWrapper'
import SubcategoryListWrapper from '../subcategory/list/SubcategoryListWrapper'
import EditSubcategoryWrapper from '../subcategory/Edit/EditSubcategoryWrapper'
import AddResourcesWrapper from '../resources /add/AddResourcesWrapper'
import ResourcesListWrapper from '../resources /list/ResourcesListWrapper'
import ResourcesLayout from '../layout/resourcesLayout/ResourcesLayout'
import WithoutLogin from '../components/authentication/WithoutLogin'
import Auth from '../components/authentication/auth'
import RegistartionWrapper from '../registration/RegistartionWrapper'




const PagesRoutes = () => {

const router = createBrowserRouter([
 // Login page routes
  {
    path: "/login",
    element: <WithoutLogin> <LoginWrapper/> </WithoutLogin>  
  },

{
  path: "/registration",
  element: <WithoutLogin> <RegistartionWrapper/> </WithoutLogin> 
},



    // Category page routes
  {
    path: "/home",
    element: <Auth> <HomeLayout/> </Auth>
  },

  {
    path: "/addcategory",
    element: <Auth> <AddCategoryFormWrapper/> </Auth> 
  }, 
  {
    path: "/edit-category/:id",
    element:  <Auth><EditCategoryWrapper/> </Auth>
  },
  {
    path: "/getcategory",
    element: <Auth> <CategoryLisitingWrapper/> </Auth>
  },

  

  // Sub Category Page routes
{
  path: "/addsubcategory",
  element: <AddSubcategoryWrapper/>
},
{
  path: "/getsubcategory",
  element: <SubcategoryListWrapper/>
},

{
  path: "/edit-subcategory/:id",
  element: <EditSubcategoryWrapper/>
},


// Resources Page routes

{
  path: "/addresources",
  element: <AddResourcesWrapper/>
},
{
  path: "/resourceslist",
  element: <ResourcesListWrapper/>
},

{
  path:"/resources/:subcategoryId",
  element: <ResourcesLayout/>
},




])



  return (
    <RouterProvider router={router}/>
  )
}


export default PagesRoutes