import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        AuthModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
