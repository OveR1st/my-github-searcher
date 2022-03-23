import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { getAPI } from './../services/PostService';
// import counterReducer from '../features/counter/counterSlice';
// import { postAPI } from "../services/PostService";

import usersReducer from './reducers/UserSlice'

const rootReducer = combineReducers({
  usersReducer,
  [getAPI.reducerPath]: getAPI.reducer
})


export const setupStore = () => {
  return configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getAPI.middleware)
  })
}


export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];






// export const setupStore = () => {
//     return configureStore({
//         reducer: rootReducer,
//         middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware)
//     })
// }