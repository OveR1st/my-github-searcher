import React from 'react'
import { IRepoInfo } from '../../models/IRepo'
import RepoItem from './RepoItem'

interface IProps {
    userRepos: IRepoInfo[]
}

const RepoInfoList:React.FC<IProps> = ({ userRepos }) => {
    return(
        <div style={{
            maxHeight: '15em',
            overflow: 'auto',
            marginTop: '20px',
        }}>
            {userRepos.map((repo) => <RepoItem key={repo.id} repo={repo}/>)}
        </div>
    )
}

export default RepoInfoList