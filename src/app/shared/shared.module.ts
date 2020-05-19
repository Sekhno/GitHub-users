import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from '@app/interceptor/loader';
import { LoaderService } from '@app/service/loader.service';

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
    providers: [
        LoaderService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true
        }
    ],
})
export class SharedModule { }