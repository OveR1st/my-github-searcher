import React from 'react'
import clsx from 'clsx'
import s from './styles.module.scss'

import { Input } from 'antd';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import { usersShortInfoSelector } from '../../store/selectors';
import UsersList from '../Users.Container';
import { fetchUser } from '../../store/reducers/ActionCreators';

const { Search } = Input;

const SearchContainer: React.FC = React.memo(() => {
    
    const dispatch = useAppDispatch()

    const { isLoading } = useAppSelector(state => state.usersReducer)
    
    const searchHandler = (str: string) => {
        dispatch(fetchUser(str))
    }

    const users = useAppSelector(usersShortInfoSelector)
    
    return (
        <div className={clsx(s.root)}>
           <Search style={{ margin: '20px 0 20px 0' }} onSearch={searchHandler} loading={isLoading} placeholder="search users" enterButton="Search" size="large" />
           <UsersList users={users} />
        </div>
    )
})

export default SearchContainer