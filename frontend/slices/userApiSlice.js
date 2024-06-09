import { USERS_URL } from '../src/constant';
import { apiSlice } from './apiSlice';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'post',
                body: data,
            }),
        }),

    }),
});

export const { useLoginMutation, } = userApiSlice;
