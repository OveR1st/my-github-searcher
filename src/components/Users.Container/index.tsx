import React from 'react'
import { IUserShortInfo } from '../../models/IUser'
import User from './User'
import s from './styles.module.scss'
interface IProps {
    users: IUserShortInfo[]
}

const UsersList:React.FC<IProps> = ({ users }) => {
    //TODO 
    /**
     * Нужно по клику пушить id в url  (user/id)
     * Компонент страница должна ловить этот айди и делать мув в стор за профилем (как вариант просто сделать селектор который 
     * будет find по общему стейту юзеров и отдавать нужны по id)
     * 
     * "repos_url": "https://api.github.com/users/octocat/repos"  (запрос за всеми репо юзера),  - нужно будет делать запрос за репо  может через axios ?
     *  https://api.github.com/repos/octocat/hello-world (запрос за конкретным репо юзера как на главной , подумать на остаток хук общий)
     * 
     * 1. Спросить нужно ли показывать все репы юзера сразу, а после ввода поиска сразу сброс состояния с поиском конкретного ? 
     * 
     */ 
    return (
        <div className={s.root}>
            {users.map((user) => <User key={user.id} user={user}/>)}
        </div>
    )
}

export default UsersList