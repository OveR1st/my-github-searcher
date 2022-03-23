import { IUserShortInfo } from './../../models/IUser';
import { RootState } from './../store';

export const usersShortInfoSelector = (state: RootState): IUserShortInfo[] => {
 return state.usersReducer.users.map((account) => {
     return {
        id: account.id,
        avatar_url: account.avatar_url,
        name: account.name || 'Name Empty',
        public_repos: account.public_repos
     }
 })
}