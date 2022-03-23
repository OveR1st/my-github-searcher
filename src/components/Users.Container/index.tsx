import React from 'react'
import { IUserShortInfo } from '../../models/IUser'
import User from './User'
import s from './styles.module.scss'
interface IProps {
    users: IUserShortInfo[]
}

const UsersList:React.FC<IProps> = ({ users }) => {
    return (
        <div className={s.root}>
            {users.map((user) => <User key={user.id} user={user}/>)}
        </div>
    )
}

export default UsersList