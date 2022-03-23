import { IUserShortInfo } from './../../models/IUser';
import { getAPI } from './../../services/PostService';
import { AppDispatch } from "../store";
// import axios from "axios";
// import { IUser } from "../../models/IUser";
// import { userSlice } from "./UserSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (e) {
//         dispatch(userSlice.actions.usersFetchingError(e.message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUserShortInfo[]>('https://api.github.com/users')
            //  const { data: users, error, isLoading, refetch } = getAPI.useFetchRandomUsersQuery(''); // get random users
            console.log('response.data', response.data);
            
            return response.data
            // console.log('user thunk', users);
        } catch (e) {
            return thunkAPI.rejectWithValue("Не удалось загрузить пользователей")
        }
    }
)