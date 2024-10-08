import { ApiSlice } from "./ApiSlice"

const CategorySlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({

        AddCategory: builder.mutation({
            query: (body) => ({
                url: "/category/create",
                method: "POST",
                body

            }),
            invalidatesTags: ["category"]
        }),

        GetCategory: builder.query({
            query: () => ({
                url: "category/getAllcategory",
                method: "GET",
            
            }),
            providesTags: ["category", "categorydelete", "categoryupdate"]
        }),
        
        GetSingleCategory: builder.query({
            query: (id) => ({
                url: `/category/getSingleCategory/${id}`,
                method: "GET",
                
            }),
        }),

        deleteCategory: builder.mutation({
            query:(id) => ({
                url: `/category/delete/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ["categorydelete"]
        }),

      editCategory: builder.mutation({
        query:({data ,id}) => ({
            url: `/category/update/${id}`,
            method: "PATCH",
            body: data
        }),
        invalidatesTags: ["categoryupdate"]
      })
 
     
        






    })

})

export const {
    useAddCategoryMutation, useGetCategoryQuery, useDeleteCategoryMutation, useEditCategoryMutation, useGetSingleCategoryQuery
} = CategorySlice
export default CategorySlice