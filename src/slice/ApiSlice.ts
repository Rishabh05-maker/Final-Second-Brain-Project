import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const getToken = () => localStorage.getItem('authToken');
export const ApiSlice = createApi({
    reducerPath: "ApiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://gndzpllq-3000.inc1.devtunnels.ms',
        prepareHeaders: (headers, { endpoint }) => {
            const token = getToken();
            if (token && endpoint !== "login") {
                headers.set('x-access-token', token);
            }
            return headers;
        }
    }),
    tagTypes: ["category", "categorydelete", "categoryupdate", "subcategory", "subcategorydelete", "subcategoryupdate",
                "resource", "resourcedelete", "resourceupdate"
    ],
    
    endpoints: () => ({})
});
