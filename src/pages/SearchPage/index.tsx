import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import clsx from 'clsx'

import SearchContainer from '../../components/Search.Container'

import s from './styles.module.scss'
import { getAPI } from '../../services/PostService'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'

// import { usersSlice } from '../../store/reducers/UserSlice'

import { fetchUsers } from '../../store/reducers/ActionCreators'
import { usersShortInfoSelector } from '../../store/selectors'

const SearchPage: React.FC = () => {
    // const { data: user, error, isLoading, refetch } = getAPI.useFetchRandomUsersQuery(''); // get random users
    // usersShortInfoSelector
    
    // const { isLoading } = useAppSelector(state => state.usersReducer)

    // const { getRandomUsers } = usersSlice.actions

    // const dispatch = useAppDispatch()
    // useEffect(() => {        
    //     dispatch(fetchUsers())
    // }, [])

    // console.log('isLoading SearchPage', isLoading);
    // console.log('users SearchPage', users);
    
    return (
        <div className={ clsx(s.root) }>
            <SearchContainer />
        </div>
    )
}

export default SearchPage