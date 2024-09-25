import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const getToken = () => localStorage.getItem('accessToken'); 

export const ApiSlice = createApi({
    reducerPath: "ApiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://192.168.1.14:3000',
        prepareHeaders: (headers) => {
            const token = getToken(); 
            if (token) {
                headers.set('x-access-token', token);  
            }
            return headers;
        }
    }),
    tagTypes: ["category", "delete", "update"],
    endpoints: () => ({})
});
