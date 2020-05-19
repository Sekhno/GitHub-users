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
import { MatProgressBarModule } from '@angular/material/progress-bar';
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
        MatProgressBarModule,
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
        MatSidenavModule,
        MatProgressBarModule,
    ],
    providers: [],
})
export class MaterialModule { }