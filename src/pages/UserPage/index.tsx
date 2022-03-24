import clsx from 'clsx'
import React, { useEffect } from 'react'

import { Button } from 'antd';
import Search from 'antd/lib/transfer/search';

import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import UserFullInfo from '../../components/UserFullInfo';

import { fetchRepo } from '../../store/reducers/ActionCreators';
import { reposSlice } from '../../store/reducers/RepoSlice';
import { userInfoSelector } from '../../store/selectors';

import RepoInfoList from '../../components/RepoInfoList';

import s from './styles.module.scss'

import debounce from 'lodash.debounce';

const UserPage: React.FC = () => {
    let { login } = useParams();
    const dispatch = useAppDispatch()
    const history = useNavigate();

    const { clearError } = reposSlice.actions

    const { error } = useAppSelector((state) => state.reposReducer)
    
    const { userInfo, userRepos } = useAppSelector((state) => userInfoSelector(state, String(login)))

    const handleHomePage = () =>{
        dispatch(clearError())
        history('/');
    }   

    const searchRepoHandler = (e: React.FormEvent<HTMLElement>) => {
        //@ts-ignore
        dispatch (fetchRepo({login: userInfo.login, searchRepo: e.target.value}))
    }
    
    const debounceHandler = debounce(searchRepoHandler, 500)
    //
    return (
        <div className={clsx(s.userPage)}>
           <div className={clsx(s.userPage_header)}>GitHub Searcher</div>
           
           <Button className={clsx(s.btn)}onClick={handleHomePage} type="primary">BACK</Button>
           
           <UserFullInfo userInfo={userInfo}/>
           
           <div className={clsx(s.userPage_error)}>{error}</div>
           
           <Search placeholder="search repo" onChange={debounceHandler} />
           
           <RepoInfoList userRepos={userRepos} />
        </div>
    )
}

export default UserPage