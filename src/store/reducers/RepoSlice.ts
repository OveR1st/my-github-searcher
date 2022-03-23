import { IRepoInfo } from './../../models/IRepo';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRepo } from "./ActionCreators";

interface IReposState {
    repos: IRepoInfo[],
    isLoading: boolean,
    error: string
}

const initialState: IReposState = {
    repos: [],
    isLoading: false,
    error: ''
}

export const reposSlice = createSlice({
    name: 'Repo',
    initialState,
    reducers: {
        clearRepo(state) {
            state.error = ''
            state.repos = []
        },
    },
    extraReducers: {
        [fetchRepo.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchRepo.fulfilled.type]: (state, { payload }: PayloadAction<IRepoInfo>) => {
            if(state.repos.find((el) => el.id === payload.id)) {
                state.error = 'Search error'
                return
            }
            const repo = {
                id: payload.id,
                name: payload.name,
                stargazers_count: payload.stargazers_count,
                forks_count: payload.forks_count,
                html_url: payload.html_url
            }
    
            state.isLoading = false
            state.error = ''
            state.repos = [
                ...state.repos,
                repo
            ]
                
        },
        [fetchRepo.rejected.type]: (state, { payload }: PayloadAction<string>) => {
            state.isLoading = false
            state.error = 'Search error'
        }
    },
})
   
export default reposSlice.reducer;