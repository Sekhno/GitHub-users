import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { LoaderService } from '@app/service/loader.service';
import { Subscription } from 'rxjs';
import { LoaderStateInterface } from '@app/models/loaderState';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
    private subscriptions: Subscription[];
    public sidenavShow: boolean = false;
    public isLoaderShow: boolean = true;
    public sidenavArray = [
        {
            label: 'Users',
            sectionId: 'users'
        },
    ]
    constructor(private loaderService: LoaderService) { }

    ngOnInit(): void {
        this.subscriptions = [
            this.loaderService.loaderState.subscribe((state: LoaderStateInterface) => {
                console.log(state);
                this.isLoaderShow = state.show;
            }),
        ];
    }

    ngOnDestroy(): void {
        while (this.subscriptions.length) {
            this.subscriptions.pop().unsubscribe();
        }
    }

    public scroll(id: string) {
        let el = document.getElementById(id);
        el.scrollIntoView();
        el.scrollIntoView({ behavior: 'smooth' });
    }

}