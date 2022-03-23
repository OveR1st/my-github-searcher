import { getAPI } from './../../services/PostService';
import { IUserShortInfo, IUserFullInfo } from './../../models/IUser';
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./ActionCreators";

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
        setUser(state, action: PayloadAction<IUserFullInfo>) {
            // state.count += action.payload
            // const userShortInfo = {
            //     avatar_url: action.payload.avatar_url,
            //     name: action.payload.name,
            //     public_repos: action.payload.public_repos
            // }
            // const { data: user, error, isLoading, refetch } = getAPI.useFetchUserQuery(action.payload); // get random users
            state.users = [
                ...state.users,
                action.payload
            ]
        },

        // usersFetching(state) {
        //     state.isLoading = true
        // },

        // usersFetchingSuccess(state, { payload }: PayloadAction<IUser[]>) {
        //     state.isLoading = false
        //     state.error = ''
        //     state.users = payload
        // },
        // usersFetchingError(state, { payload }: PayloadAction<IUser[]>) {
        //     state.isLoading = false
        //     state.error = 'Missing users'
        //     state.users = payload
        // },
    },
    extraReducers: {
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUsers.fulfilled.type]: (state, { payload }: PayloadAction<IUserFullInfo[]>) => {
            state.isLoading = false
            state.error = ''
            state.users = payload
        },
        [fetchUsers.rejected.type]: (state, { payload }: PayloadAction<string>) => {
            state.isLoading = false
            state.error = payload
        }
    }

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