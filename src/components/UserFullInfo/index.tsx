import { List } from "antd"
import React from "react"
import { IUserFullInfo } from "../../models/IUser"

import s from './styles.module.scss'
import clsx from "clsx"

interface IProps {
    userInfo?: IUserFullInfo
}

const UserFullInfo:React.FC<IProps> = React.memo(({ userInfo }) => {
    const listData = [
         `UserName: ${userInfo?.name || userInfo?.login || 'emty'}`,
         `Email: ${userInfo?.email || 'emty'}`,
         `Location: ${userInfo?.location || 'emty'}`,
         `Join Date: ${userInfo?.created_at || 'emty'}`,
         `Followers: ${userInfo?.followers || 'emty'}`,
         `Following: ${userInfo?.following || 'emty'}`,
    ]
 return (
        <div className={clsx(s.listWrapper)}>
            <div><img src={userInfo?.avatar_url} alt="Avatar" /></div>
            <div>
            <List
                size="small"
                bordered
                dataSource={listData}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
            </div>
        </div>
 )
})

export default UserFullInfo