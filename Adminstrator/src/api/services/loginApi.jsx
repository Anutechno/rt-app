import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
    reducerPath: "loginApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_DOMIAN_API,
    }),
    endpoints: (builder) => ({
        // login call api
        postLogin: builder.mutation({
            query: (data) => {
                const { id, pwd, reCaptcha } = data;
                return {
                    url: `/admin/login?login=${id}&password=${pwd}&rememberMe=true&grecaptcha=${reCaptcha}`,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                };
            },
        }),
        // login get data api
        getCheckingDuo: builder.query({
            query: (data) => {
                return {
                    url: `admin/login/status?data=${data}`,
                    method: "GET",
                };
            },
        }),
    }),
});

export const { usePostLoginMutation, useGetCheckingDuoQuery } = loginApi;
