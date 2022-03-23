import { IRepoInfo } from './../../models/IRepo';
import { IUserShortInfo, IUserFullInfo } from './../../models/IUser';
import { RootState } from './../store';

export const usersShortInfoSelector = (state: RootState): IUserShortInfo[] => {
 return state.usersReducer.users.map((account) => {
     return {
        id: account.id,
        login: account.login,
        avatar_url: account.avatar_url,
        name: account.name || account.login,
        public_repos: account.public_repos
     }
 })
}

   export const userProfileSelector = (state: RootState, login: string): IUserFullInfo => {
     return state.usersReducer.users.find((user) => user.login === login) as IUserFullInfo
   }

   export const userRepoSelector = (state: RootState): IRepoInfo[] => {
    return state.reposReducer.repos
  }