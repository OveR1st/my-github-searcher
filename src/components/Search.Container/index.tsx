import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import s from './styles.module.scss'

import { Input } from 'antd';
import { getAPI } from '../../services/PostService';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { usersSlice } from '../../store/reducers/UserSlice';
import { IUserFullInfo } from '../../models/IUser';
import { usersShortInfoSelector } from '../../store/selectors';
import UsersList from '../Users.Container';

const { Search } = Input;

const SearchContainer: React.FC = React.memo(() => {
    
    const [ searchQuery, setSearchQuery ] = React.useState('')

    const { data: user, isLoading, refetch } = getAPI.useFetchUserQuery(searchQuery); //get search user
    
    const dispatch = useAppDispatch()
    const { setUser } = usersSlice.actions
    
    useEffect(() => {
        user && dispatch(setUser(user))
    }, [user])
    
    const searhHandler = (str: string) => {
        setSearchQuery(str)
    }

    const users = useAppSelector(usersShortInfoSelector)
    // console.log('USERS SEARCH', users);
    
    return (
        <div className={clsx(s.root)}>
            <div className={clsx(s.title)}>GitHub Searcher</div>
           
           <Search style={{ margin: '20px 0 20px 0' }} onSearch={searhHandler} loading={isLoading} placeholder="input search text" enterButton="Search" size="large" />
           <UsersList users={users} />
        </div>
    )
})

export default SearchContainer