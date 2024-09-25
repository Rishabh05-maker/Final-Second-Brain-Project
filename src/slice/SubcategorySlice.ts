import { ApiSlice } from "./ApiSlice"


const SubcategorySlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({


        AddSubcategory: builder.mutation({
            query: (body) => ({
                url: "/subcategory/createsubcategory",
                method: "POST",
                body
            })
        }),
        GetSubcategory: builder.query({
            query: (body) => ({
                url: "/subcategory/getAllSubcategory",
                method: "GET",
                body
            })
        })



    })
})









export default SubcategorySlice