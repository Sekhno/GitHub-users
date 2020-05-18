import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [

    ],
    imports: [
        HttpClientModule,
        CommonModule,
        MaterialModule,
        FlexLayoutModule,

    ],
    exports: [
        HttpClientModule,
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
    ],
    providers: [],
})
export class SharedModule { }