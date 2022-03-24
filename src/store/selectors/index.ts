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

export const userInfoSelector = (state: RootState, login: string): {userInfo: IUserFullInfo, userRepos: IRepoInfo[]} => {
	const filterRepo = (rep: IRepoInfo) => {
		return rep.owner === login
	}

	const userInfo = state.usersReducer.users.find((user) => user.login === login) as IUserFullInfo
	const userRepos = state.reposReducer.repos.filter(filterRepo)

	return {
		userInfo,
		userRepos
	}
}