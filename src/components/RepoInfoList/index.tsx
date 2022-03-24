import clsx from 'clsx'
import React from 'react'
import { IRepoInfo } from '../../models/IRepo'
import RepoItem from './RepoItem'

import s from './styles.module.scss'

interface IProps {
    userRepos: IRepoInfo[]
}

const RepoInfoList:React.FC<IProps> = ({ userRepos }) => {
    return(
        <div className={clsx(s.repoWrapper)}>
            {userRepos.map((repo) => <RepoItem key={repo.id} repo={repo}/>)}
        </div>
    )
}

export default RepoInfoList