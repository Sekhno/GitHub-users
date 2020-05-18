import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentModule } from '../component/component.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
    declarations: [LayoutComponent],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        ComponentModule,
        SharedModule
    ]
})
export class LayoutModule { }