
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



const PagesRoutes = () => {

const router = createBrowserRouter([

  {
    path: "/login",
    element: <LoginWrapper/>
  },

  {
    path: "/home",
    element: <HomeLayout/>
  },

  {
    path: "/addcategory",
    element: <AddCategoryFormWrapper/>
  },
  {
    path: "/edit-category/:id",
    element: <EditCategoryWrapper/>
  },
  {
    path: "/getcategory",
    element: <CategoryLisitingWrapper/>
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
}


])



  return (
    <RouterProvider router={router}/>
  )
}


export default PagesRoutes