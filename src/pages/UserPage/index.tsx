import clsx from 'clsx'
import React from 'react'

import { Button } from 'antd';
import Search from 'antd/lib/transfer/search';

import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

import UserFullInfo from '../../components/UserFullInfo';

import { usersSlice } from '../../store/reducers/UserSlice';
import { fetchRepo } from '../../store/reducers/ActionCreators';
import { reposSlice } from '../../store/reducers/RepoSlice';
import { userProfileSelector, userRepoSelector } from '../../store/selectors';

import RepoInfoList from '../../components/RepoInfoList';

import s from './styles.module.scss'
import _ from 'lodash'

const UserPage: React.FC = () => {
    let { login } = useParams();
    const dispatch = useAppDispatch()
    const history = useNavigate();

    const { clearRepo } = reposSlice.actions

    const { error } = useAppSelector((state) => state.reposReducer)
    
    const handleHomePage = () =>{
        dispatch (clearRepo())
        history('/');
    }

    const userInfo = useAppSelector((state) => userProfileSelector(state, String(login)))
   
    const userRepos = useAppSelector(userRepoSelector)

    const searchRepoHandler = (e: React.FormEvent<HTMLElement>) => {
        //@ts-ignore
        dispatch (fetchRepo({login: userInfo.login, searchRepo: e.target.value}))
    }
    
    const debounceHandler = _.debounce(searchRepoHandler, 500)

    // useEffect(() => {
    //     //push repo to user state 
    //     userRepo.id !== 0 && dispatch( setRepoUser({
    //         repo: userRepo,
    //         userName: userInfo.login
    //     })  )
    // }, [userRepo])
    
    return (
        <div className={ clsx(s.root) }>
           <div style={{ textAlign: 'center', fontSize: '1.8em' }}>GitHub Searcher</div>
           
           <Button className={clsx(s.btn)}onClick={handleHomePage} type="primary">BACK</Button>
           
           <UserFullInfo userInfo={userInfo}/>
           
           <div style={{color: 'red', height: '30px'}}>{error}</div>
           <Search placeholder="search repo" onChange={debounceHandler} />
           
           <RepoInfoList userRepos={userRepos} />
        </div>
    )
}

export default UserPage