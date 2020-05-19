export interface UserInterface {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;           // "https://avatars0.githubusercontent.com/u/1?v=4",
    gravatar_id: string;
    url: string;                  // "https://api.github.com/users/mojombo",
    html_url: string;             // "https://github.com/mojombo",
    followers_url: string;        // "https://api.github.com/users/mojombo/followers",
    following_url: string;        // "https://api.github.com/users/mojombo/following{/other_user}",
    gists_url: string;            // "https://api.github.com/users/mojombo/gists{/gist_id}",
    starred_url: string;          // "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    subscriptions_url: string;    // "https://api.github.com/users/mojombo/subscriptions",
    organizations_url: string;    // "https://api.github.com/users/mojombo/orgs",
    repos_url: string;            // "https://api.github.com/users/mojombo/repos",
    events_url: string;           // "https://api.github.com/users/mojombo/events{/privacy}",
    received_events_url: string;  // "https://api.github.com/users/mojombo/received_events",
    type: string;                 // 'User'
    site_admin: boolean;
}