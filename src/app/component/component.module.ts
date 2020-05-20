import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
        HeaderComponent,
        UsersComponent,
        ProfileComponent
    ],
    imports: [
        SharedModule,
    ],
    exports: [
        HeaderComponent,
        UsersComponent,
        ProfileComponent
    ]
})
export class ComponentModule { }