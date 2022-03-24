import React, { useEffect } from 'react'
import clsx from 'clsx'

import UsersList from '../Users.Container';
import { Input } from 'antd';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { usersShortInfoSelector } from '../../store/selectors';
import { fetchUser } from '../../store/reducers/ActionCreators';
import { usersSlice } from '../../store/reducers/UserSlice';

import s from './styles.module.scss'

const { Search } = Input;

const SearchContainer: React.FC = React.memo(() => {
    
    const dispatch = useAppDispatch()

    const { isLoading, error } = useAppSelector(state => state.usersReducer)
    
    const searchHandler = (str: string) => {
        dispatch(fetchUser(str))
    }

    const users = useAppSelector(usersShortInfoSelector)

    const { clearError } = usersSlice.actions

    useEffect(() => {
        return () => {
            dispatch(clearError())
        };
    },[])
    
    return (
        <div className={clsx(s.pageWrapper)}>
            <div className={clsx(s.pageWrapper_error)}>{error}</div>
           <Search className={clsx(s.pageWrapper_search)} onSearch={searchHandler} loading={isLoading} placeholder="search users" enterButton="Search" size="large" />
           <UsersList users={users} />
        </div>
    )
})

export default SearchContainer