import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';

import usersReducer from './reducers/UserSlice'
import reposReducer from './reducers/RepoSlice'

const rootReducer = combineReducers({
  	usersReducer,
  	reposReducer,
})

export const setupStore = () => {
  	return configureStore({
    	reducer: rootReducer,
    	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
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