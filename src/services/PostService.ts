import { IUserShortInfo, IUserFullInfo } from './../models/IUser';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
// import { IPost } from "../models/IPost";


export const getAPI = createApi({
    reducerPath: 'getAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
    tagTypes: ['GET'],
    endpoints: (build) => ({
        fetchUser: build.query<IUserFullInfo, string>({
            query: (name: string) => `users/${name}`,
            // providesTags: result => {
            //     console.log('result', result)
            //     return []
            // }
        }),
        // fetchRandomUsers: build.query<IUserShortInfo, string>({
        //     query: () => `users/`
        //     // providesTags: result => ['Post']
        // }),
        // createPost: build.mutation<IPost, IPost>({
        //     query: (post) => ({
        //         url: `/posts`,
        //         method: 'POST',
        //         body: post
        //     }),
        //     invalidatesTags: ['Post']
        // }),
        // updatePost: build.mutation<IPost, IPost>({
        //     query: (post) => ({
        //         url: `/posts/${post.id}`,
        //         method: 'PUT',
        //         body: post
        //     }),
        //     invalidatesTags: ['Post']
        // }),
        // deletePost: build.mutation<IPost, IPost>({
        //     query: (post) => ({
        //         url: `/posts/${post.id}`,
        //         method: 'DELETE',
        //     }),
        //     invalidatesTags: ['Post']
        // }),
    })
})