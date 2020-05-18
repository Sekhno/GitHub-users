import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
    declarations: [

    ],
    imports: [
        MatTabsModule,
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        MatExpansionModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatInputModule,
        MatButtonModule,
        MatSidenavModule,
    ],
    exports: [
        MatTabsModule,
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        MatExpansionModule,
        MatToolbarModule,
        MatSidenavModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule
    ],
    providers: [],
})
export class MaterialModule { }