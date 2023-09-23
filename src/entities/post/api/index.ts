import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Post } from "../../../shared/types.ts";

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder) => ({
        getAllPosts: builder.query<Post[], string>({
            query: () => 'posts'
        }),
        getOnePost: builder.query<Post, string>({
            query: (id) => `posts/${id}`
        })
    })
});

export const { useGetAllPostsQuery, useGetOnePostQuery } = postApi;
