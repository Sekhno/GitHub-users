import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GithubService {
    private readonly backUrl = environment.backUrl;
    constructor(private http: HttpClient) { }
    public initGithubApi() {
        return this.http.get(this.backUrl);
    }
    public initGithubUsers() {
        return this.http.get(this.getFullUrl('users'));
    }
    public initGithubUserBy(login: string) {
        return this.http.get(this.getFullUrl('users/' + login));
    }
    public initGithubBy(fullUrl: string) {
        return this.http.get(fullUrl);
    }
    public initGithubRepoBy(user: string, repo: string) {
        const url = 'repos/' + user + '/' + repo;
        return this.http.get(this.getFullUrl(url));
    }
    public initGithubCommitsBy(user: string, repo: string, sha: string) {
        // https://api.github.com/repos/evanphx/ace/commits/1a5320f9e9d1ab6deb45c8883f88c60817028b59
        const url = 'repos/' + user + '/' + repo + '/commits/' + sha;
        return this.http.get(this.getFullUrl(url));
    }
    private getFullUrl(apiPoint: string): string {
        return this.backUrl + apiPoint;
    }
}