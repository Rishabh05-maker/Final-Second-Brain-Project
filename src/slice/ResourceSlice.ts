import { ApiSlice } from "./ApiSlice";



const ResourceSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({

        AddResources: builder.mutation({
            query: (body) => ({
                url: "/resourse/create",
                method: "POST",
                body
            }),
            invalidatesTags: ["resource"]
        }),
        GetSubcategoryResources: builder.query({
            query: (id) => ({
                url: `/subcategory/getSubcategoryWithResources/${id}`,
                method: "GET",            
            }),
            providesTags: ["resource", "resourcedelete", "resourceupdate"]
        }),

        DeleteResource: builder.mutation({
            query: (id) => ({
                url: `/resourse/delete/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["resourcedelete"]
        }),
        GetSingleResources: builder.query({
            query: (id) => ({
                url: `/resourse/getSingleResousrse/${id}`,
                method: "GET"
            })
        }),
        EditResources: builder.mutation({
            query: ({data, id}) => ({
                url: `/resourse/update/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ["resourceupdate"]
        })
    })
})


export const {
useAddResourcesMutation, useGetSubcategoryResourcesQuery, useDeleteResourceMutation, useGetSingleResourcesQuery, useEditResourcesMutation
} = ResourceSlice
export default ResourceSlice