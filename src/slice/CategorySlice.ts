import { ApiSlice } from "./ApiSlice"

const CategorySlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({

        AddCategory: builder.mutation({
            query: ({body, token}) => ({
                url: "/category/create",
                method: "POST",
                body,
                headers:{"x-access-token": token}

            }),
            invalidatesTags: ["category"]
        }),

        GetCategory: builder.query({
            query: ({body, token}) => ({
                url: "category/getAllcategory",
                method: "GET",
                body,
                headers:{"x-access-token": token}
            }),
            providesTags: ["category", "delete", "update"]
        }),
        
        GetSingleCategory: builder.query({
            query: ({data, token, id}) => ({
                url: `/category/getSingleCategory/${id}`,
                method: "GET",
                body: data,
                headers:{"x-access-token": token}
            }),
        }),




        deleteCategory: builder.mutation({
            query:({id, token}) => ({
                url: `/category/delete/${id}`,
                method: "DELETE",
                body: id,
                headers:{"x-access-token": token}
            }),
            invalidatesTags: ["delete"]
        }),

      editCategory: builder.mutation({
        query:({data, token, id}) => ({
            url: `/category/update/${id}`,
            method: "PATCH",
            body: data,
            headers:{"x-access-token": token}
        }),
        invalidatesTags: ["update"]
      })
 
     
        






    })

})

export const {
    useAddCategoryMutation, useGetCategoryQuery, useDeleteCategoryMutation, useEditCategoryMutation, useGetSingleCategoryQuery
} = CategorySlice
export default CategorySlice