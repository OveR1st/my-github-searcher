import { IRepoInfo } from './../../models/IRepo';

import { IUserShortInfo, IUserFullInfo } from './../../models/IUser';
import { createSelector, createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { fetchRepo, fetchUser } from "./ActionCreators";

interface IUsersState {
    users: IUserFullInfo[],
    isLoading: boolean,
    error: string
}

const initialState: IUsersState = {
    users: [],
    isLoading: false,
    error: ''
}

export const usersSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setRepoUser(state, action: PayloadAction<{repo: IRepoInfo, userName: string}>) {
            let copyStateUsers = current(state.users)
            console.log('copy SSTATE', copyStateUsers);
            let updateUser = copyStateUsers.find((user) => user.login === action.payload.userName) as IUserFullInfo
            
            // updateUser.repos = [
            //     ...updateUser.repos,
            //     action.payload.repo
            // ] as IRepoInfo[]

            let copyRepos = Object.assign(updateUser.repos, action.payload.repo);
            
            // copy.push(action.payload.repo)
            // updateUser.repos.push(action.payload.repo)
            updateUser.repos = copyRepos
            state.users = [
                ...state.users,
                updateUser
            ] as IUserFullInfo[]
           
        },
    },
    extraReducers: {
        [fetchUser.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUser.fulfilled.type]: (state, { payload }: PayloadAction<IUserFullInfo>) => {
            let updateUsers = {
                id: payload.id,
                email: payload.email,
                location: payload.location,
                public_repos: payload.public_repos,
                repos_url: payload.repos_url,
                name: payload.name,
                login: payload.login,
                avatar_url: payload.avatar_url,
                followers: payload.followers,
                following: payload.following,
                created_at: payload.created_at,
                repos: [] as IRepoInfo[]
            } as IUserFullInfo
            state.isLoading = false
            state.error = ''
            state.users = [
                ...state.users,
                updateUsers
            ]
        },
        [fetchUser.rejected.type]: (state, { payload }: PayloadAction<string>) => {
            state.isLoading = false
            state.error = payload
        }
    },

})

// export const usersSelector = (state: IUsersState): IUserFullInfo[] => {
//     return state.users
// }

// export const usersShortInfoSelector = (state: IUsersState): IUserShortInfo[] => {
//     //  return state.users.map((account) => {
//     //     return {
//     //         avatar_url: account.avatar_url,
//     //         name: account.name,
//     //         public_repos: account.public_repos
//     //     }
//     // }) 
//     return state.users
// }
   
export default usersSlice.reducer;