import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() public sidenavState: boolean = false;
    @Output() toggleSidenav: EventEmitter<boolean> = new EventEmitter();
    constructor() { }

    ngOnInit(): void {
    }

    openSideNav(): void {
        this.toggleSidenav.emit(true);
    }


    public getMenuIcon(): string {
        return this.sidenavState ? 'close' : 'menu';
    }

}