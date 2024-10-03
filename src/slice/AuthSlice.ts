import { ApiSlice } from "./ApiSlice";

const AuthSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body,
      }),
    }),
    registration: builder.mutation({
      query: (body) => ({
        url: "/user/register",
        method: "POST",
        body,
      }),
    }),
  }),
});


export const {
  useLoginMutation,
  useRegistrationMutation,
} = AuthSlice;
