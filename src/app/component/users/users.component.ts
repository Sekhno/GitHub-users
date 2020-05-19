import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from '@app/service/github.service';

import { Subscription } from 'rxjs';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [GithubService]
})

export class UsersComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];
    public isLoaderShow: boolean = true;
    constructor(private githubService: GithubService) { }

    ngOnInit():void {
        
        this.subscriptions = [
            this.githubService.initGithubUsers().subscribe(res => console.log(res))
        ];
    }

    ngOnDestroy(): void {
        while (this.subscriptions.length) {
            this.subscriptions.pop().unsubscribe();
        }
    }
}