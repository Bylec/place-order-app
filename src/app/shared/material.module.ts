import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule, MatInputModule, MatExpansionModule, MatGridList, MatGridListModule, MatListModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatSelectModule,
        MatInputModule,
        MatExpansionModule,
        MatListModule,
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatSelectModule,
        MatInputModule,
        MatExpansionModule,
        MatListModule,
    ]
})
export class MaterialModule {
}
