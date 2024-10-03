import { ApiSlice } from "./ApiSlice";



const ResourceSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({

        AddResources: builder.mutation({
            query: (body) => ({
                url: "/resourse/create",
                method: "POST",
                body
            })
        }),
        GetSubcategoryResources: builder.query({
            query: (id) => ({
                url: `/subcategory/getSubcategoryWithResources/${id}`,
                method: "GET",            
            })
        }),


    })
})


export const {
useAddResourcesMutation, useGetSubcategoryResourcesQuery
} = ResourceSlice
export default ResourceSlice