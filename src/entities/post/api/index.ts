import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {Post} from "../../../shared/types.ts";

export const postApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }), // Укажите свой URL-адрес
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: (limit) => `posts?&_limit=${limit}`,
        }),
        getOnePost: builder.query<Post[], void>({
            query: (id) => `posts/${id}`,
        }),
    }),
});

export const { useGetPostsQuery, useGetOnePostQuery } = postApi;