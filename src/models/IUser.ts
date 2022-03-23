/**
 * User interface
 */
export interface IUserFullInfo {
    id: number | string,
    email: string,
    location: string,
    public_repos: number,
    repos_url: string,
    name: string,
    avatar_url: string,
    followers: number,
    following: number,
    created_at: string
}

export type IUserShortInfo = Pick<IUserFullInfo, 'avatar_url' | 'name' | 'public_repos' | 'id'>;