import { ApiSlice } from "./ApiSlice"


const SubcategorySlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({


        AddSubcategory: builder.mutation({
            query: ({subcategoryName, categoryId}) => ({
                url: '/subcategory/createsubcategory',
                method: "POST",
                body: {subcategoryName, categoryId}
            })
        }),
        GetSubcategory: builder.query({
            query: () => ({
                url: `/category/getAllCategories`,
                method: "GET",
            
            })
        })



    })
})

export const {
useAddSubcategoryMutation, useGetSubcategoryQuery
} = SubcategorySlice


export default SubcategorySlice








