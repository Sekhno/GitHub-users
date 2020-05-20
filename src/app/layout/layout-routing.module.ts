import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UsersComponent } from '@app/component/users/users.component';
import { ProfileComponent } from '@app/component/profile/profile.component';

const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: '',
            component: UsersComponent
        },
        {
            path: 'user/:id',
            component: ProfileComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }