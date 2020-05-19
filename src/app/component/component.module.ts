import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component'

@NgModule({
    declarations: [
        HeaderComponent,
        UsersComponent
    ],
    imports: [
        SharedModule,
    ],
    exports: [
        HeaderComponent,
        UsersComponent
    ]
})
export class ComponentModule { }