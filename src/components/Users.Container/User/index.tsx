import clsx from 'clsx'
import React from 'react'
import { IUserShortInfo } from '../../../models/IUser'
import s from './styles.module.scss'

import { Card } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

interface IProps {
    user: IUserShortInfo
}

const User:React.FC<IProps> = ({ user }) => {

    const history = useNavigate();

    const handleProfilePage = (str: string) =>{
        // e.preventDefault();

        history(`/user/${str}`);
    }
    // onClick={() => <Link to={`/user/${user.name}`}></Link>}
    return (
        <Card.Grid onClick={() => handleProfilePage(user.name)} hoverable className={clsx(s.root)}>
            {/* <Link className={clsx(s.root_link)} to={`/user/${user.name}`}> */}
                <div>
                    <img src={user.avatar_url}
                        alt="avatar"></img>
                </div>
                <div className={clsx(s.name)}>{user.name}</div>
                <div className={clsx(s.count)} >Repo: {user.public_repos}</div>
            {/* </Link> */}
        </Card.Grid>
    )
}

export default User