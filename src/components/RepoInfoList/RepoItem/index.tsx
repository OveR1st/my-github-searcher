import clsx from 'clsx'
import React from 'react'
import { IRepoInfo } from '../../../models/IRepo'

import s from './styles.module.scss'

interface IProps {
    repo: IRepoInfo
}

const RepoItem:React.FC<IProps> = React.memo(({ repo }) => {
 return (
        <a href={repo.html_url} target='_blank' className={clsx(s.listWrapper)}>
            <div>{repo.name}</div>
            <div>
                <div>{repo.forks_count} Forks</div>
                <div>{repo.stargazers_count} Stars</div>
            </div>
        </a>
 )
})

export default RepoItem