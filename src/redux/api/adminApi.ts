import { IMeta } from "@/types";
import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
const ADMIN_URL = '/admins'
const CREATE_ADMIN_URL = '/users/create-admin'

const adminApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        admins: build.query({
            query: () => ({
                url: `${ADMIN_URL}`,
                method: "GET",
                // params: arg
            }),
            transformResponse: (response: any, meta: IMeta) => {
                return {
                    admins: response,
                    meta
                }
            },
            providesTags: [tagTypes.depatment]
        }),
        addAdmin: build.mutation({
            query: (data) => ({
                url: `${CREATE_ADMIN_URL}`,
                method: "POST",
                data,
                contentType: "multipart/form-data"
            }),
            invalidatesTags: [tagTypes.admin]
        }),
    })
})

export const { useAddAdminMutation, useAdminsQuery } = adminApi