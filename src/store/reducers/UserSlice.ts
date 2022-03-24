import { IUserFullInfo } from './../../models/IUser';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUser } from "./ActionCreators";
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
        clearError(state) {
            state.error = ''
        },
    },
    extraReducers: {
        
        [fetchUser.pending.type]: (state) => {
            state.isLoading = true
        },

        [fetchUser.fulfilled.type]: (state, { payload }: PayloadAction<IUserFullInfo>) => {
            
            if(state.users.find((user) => user.login === payload.login)) {
                
                state.isLoading = false
                state.error = 'user exists'

                return
            }
            
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
   
export default usersSlice.reducer;