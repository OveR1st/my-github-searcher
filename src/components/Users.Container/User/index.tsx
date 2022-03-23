import clsx from 'clsx'
import React from 'react'
import { IUserShortInfo } from '../../../models/IUser'
import s from './styles.module.scss'

import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

interface IProps {
    user: IUserShortInfo
}

const User:React.FC<IProps> = ({ user }) => {

    const history = useNavigate();

    const handleProfilePage = (str: string) =>{
        history(`/user/${str}`);
    }
    
    return (
        <Card.Grid onClick={() => handleProfilePage(user.login)} hoverable className={clsx(s.root)}>
            <div>
                <img src={user.avatar_url}
                    alt="avatar"></img>
            </div>
            <div className={clsx(s.name)}>{user.name}</div>
            <div className={clsx(s.count)} >Repo: {user.public_repos}</div>
        </Card.Grid>
    )
}

export default User