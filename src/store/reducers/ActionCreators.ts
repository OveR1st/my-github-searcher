
import { IRepoInfo } from './../../models/IRepo';
import { IUserShortInfo } from './../../models/IUser';

import { createAsyncThunk, isFulfilled } from "@reduxjs/toolkit";
import axios from 'axios';

const api = 'https://api.github.com/'

export const fetchUser = createAsyncThunk(
    'users/fetchById',
    async (data: string, thunkAPI) => {
        try {
            const response = await axios.get<IUserShortInfo[]>(`${api}users/${data}`)
            
            return response.data
        
        } catch (e) {
            return thunkAPI.rejectWithValue("Failed to load user")
        }
    }
)

export const fetchRepo = createAsyncThunk(
    'repos/fetchRepo',
    async (data: {login: string , searchRepo: string}, thunkAPI) => {
        try {
            const response = await axios.get(`${api}repos/${data.login}/${data.searchRepo}`)

            const newRepo = {
                id: response.data.id,
                name: response.data.name,
                stargazers_count: response.data.stargazers_count,
                forks_count: response.data.forks_count,
                html_url: response.data.html_url,
                owner:  response.data.owner.login
            }

            return newRepo
        } catch (e) {
            return thunkAPI.rejectWithValue("Failed to load repo")
        } 
    }
)