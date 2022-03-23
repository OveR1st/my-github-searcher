
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
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)

export const fetchRepo = createAsyncThunk(
    'repos/fetchRepo',
    async (data: {login: string , searchRepo: string}, thunkAPI) => {
        try {
            const response = await axios.get<IRepoInfo>(`${api}repos/${data.login}/${data.searchRepo}`)

            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("error")
        } 
    }
)