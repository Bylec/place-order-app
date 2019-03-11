import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {ConfigService} from '../shared/services/config.service';
import {AuthService} from '../shared/services/auth.service';
import {AppRoutingModule} from '../app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DinnerService} from '../shared/services/dinner.service';
import {DinnerCoursePipe} from '../shared/pipes/dinner-course.pipe';
import {MaterialModule} from '../shared/material.module';
import {AuthTokenInterceptor} from '../shared/interceptors/auth-token.interceptor';
import {OrderService} from '../shared/services/order.service';
import {ErrorInterceptor} from '../shared/interceptors/error.interceptor';
import {DinnerSearchPipe} from '../shared/pipes/dinner-search.pipe';
import {ComponentSearchPipe} from '../admin/dinner/dinner-add/dinner-components-list/component-search.pipe';
import {UserModule} from '../user/user.module';
import {BrowserAnimationsModule} from '../../../node_modules/@angular/platform-browser/animations';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        UserModule,
        NgbModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule
    ],
    declarations: [
        HeaderComponent,
        HomeComponent,
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent,
        BrowserAnimationsModule
    ],
    providers: [
        ConfigService,
        AuthService,
        DinnerSearchPipe,
        DinnerCoursePipe,
        ComponentSearchPipe,
        OrderService,
        DinnerService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthTokenInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        },
    ]
})
export class CoreModule {
}
