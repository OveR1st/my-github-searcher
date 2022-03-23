import { IRepoInfo } from './../models/IRepo';
import { IUserFullInfo } from './../models/IUser';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const getAPI = createApi({
    reducerPath: 'getAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/', 
    prepareHeaders: (headers, { getState }) => {
        // const token = (getState() as RootState).auth.token;
        const token = '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'
        // If we have a token set in state, let's assume that we should be passing it.
        // if (token) {
          headers.set('authorization', `Bearer ${token}`);
        // }
        return headers;
      }, }),
    tagTypes: ['GET'],
    endpoints: (build) => ({
        fetchUser: build.query<IUserFullInfo, string>({
            query: (name: string) => `users/${name}`,
          
        }),
        fetchRepo: build.query<IRepoInfo, {name?: string, searchName: string}>({
            query: (infoObj) => `/repos/${infoObj.name}/${infoObj.searchName}`,
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                  const { data } = await queryFulfilled
                  // `onSuccess` side-effect
                //   dispatch(setRepo(data))
                } catch (err) {
                  // `onError` side-effect
                //   dispatch(messageCreated('Error fetching post!'))
                }
            }
        })
    })
})