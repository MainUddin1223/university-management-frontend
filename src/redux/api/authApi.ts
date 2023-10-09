import { getBaseUrl } from "@/helpers/config/envConfig"
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

const authUrl = '/auth'

const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        userLogin: build.mutation({
            query: (loginData) => ({
                url: `${authUrl}/login`,
                method: "POST",
                data: loginData
            }),
            invalidatesTags: [tagTypes.user]
        }),
    }),
})

export const { useUserLoginMutation } = authApi