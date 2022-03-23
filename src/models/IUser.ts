import { IRepoInfo } from './IRepo';
/**
 * User interface
 */
export interface IUserFullInfo {
    id: number,
    email: string,
    location: string,
    public_repos: number,
    repos_url: string,
    name: string,
    login: string,
    avatar_url: string,
    followers: number,
    following: number,
    created_at: string,
    repos: IRepoInfo[]
}

export type IUserShortInfo = Pick<IUserFullInfo, 'avatar_url' | 'login' | 'name' | 'public_repos' | 'id' >;