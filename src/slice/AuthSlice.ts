import  {ApiSlice}  from "./ApiSlice";


 const AuthSlice = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({

        login: builder.mutation({
            query: (body) => ({
                url: "/user/login",
                method: "POST",
                body
            }),


        })
    })
})

export const {
useLoginMutation, 
} = AuthSlice




