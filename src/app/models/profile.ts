export interface ProfileInterface {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;                 // "https://avatars0.githubusercontent.com/u/4?v=4"
    gravatar_id: string;
    url: string;                        // "https://api.github.com/users/wycats"
    html_url: string;                   // "https://github.com/wycats"
    followers_url: string;              // "https://api.github.com/users/wycats/followers"
    following_url: string;              // "https://api.github.com/users/wycats/following{/other_user}"
    gists_url: string;                  // "https://api.github.com/users/wycats/gists{/gist_id}"
    starred_url: string;                // "https://api.github.com/users/wycats/starred{/owner}{/repo}"
    subscriptions_url: string;          // "https://api.github.com/users/wycats/subscriptions"
    organizations_url: string;          // "https://api.github.com/users/wycats/orgs"
    repos_url: string;                  // "https://api.github.com/users/wycats/repos"
    events_url: string;                 // "https://api.github.com/users/wycats/events{/privacy}"
    received_events_url: string;        // "https://api.github.com/users/wycats/received_events"
    type: string;                       // "User"
    site_admin: boolean;
    name: string;
    company: string;
    blog: string;                       // "http://yehudakatz.com"
    location: string;                   // "San Francisco"
    email: string;                      // "wycats@gmail.com"
    hireable: null | any;
    bio: null | any;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;                 // "2008-01-12T05:38:33Z"
    updated_at: string;                 // "2020-02-05T00:54:00Z"
}