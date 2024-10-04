import { ApiSlice } from "./ApiSlice"


const SubcategorySlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({

        AddSubcategory: builder.mutation({
            query: ({subcategoryName, categoryId}) => ({
                url: '/subcategory/createsubcategory',
                method: "POST",
                body: {subcategoryName, categoryId}
            }),
            invalidatesTags: ["subcategory"]
        }),

        GetSubcategory: builder.query({
            query: () => ({
                url: `/category/getAllCategories`,
                method: "GET",
            
            }),
            providesTags:["subcategory", "subcategorydelete", "subcategoryupdate"]
        }),

    deleteSubcategory: builder.mutation({
        query: (id) => ({
            url: `/subcategory/delete/${id}`,
            method: "DELETE",
            body: id
        }),
        invalidatesTags:["subcategorydelete"]
    }),

    editSubcategory: builder.mutation({
        query:({data ,id}) => ({
            url: `/subcategory/update/${id}`,
            method: "PATCH",
            body: data
        }),
        invalidatesTags:["subcategoryupdate"]
      }),
      getSingleSubcategory: builder.query({
        query:(id) => ({
            url: `/subcategory/getSingleSubCategory/${id}`,
            method: "GET"
        })
    })



    })
})

export const {
useAddSubcategoryMutation, useGetSubcategoryQuery, useDeleteSubcategoryMutation, useEditSubcategoryMutation, useGetSingleSubcategoryQuery
} = SubcategorySlice


export default SubcategorySlice








