import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    public sidenavShow: boolean = false;

    public sidenavArray = [
        {
            label: 'Products',
            sectionId: 'product'
        },
        {
            label: 'Technologies',
            sectionId: 'technology'
        },
        {
            label: 'Who our Clients',
            sectionId: 'services'
        },
        {
            label: 'Case Studies',
            sectionId: 'porfolio'
        },
        {
            label: 'Feedbacks',
            sectionId: 'client'
        },
        {
            label: 'Contact Us',
            sectionId: 'contact'
        },

    ]
    constructor() { }

    ngOnInit(): void {
    }


    scroll(id: string) {
        let el = document.getElementById(id);
        el.scrollIntoView();
        el.scrollIntoView({ behavior: 'smooth' });
    }

}