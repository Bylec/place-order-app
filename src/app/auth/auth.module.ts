import {NgModule} from '@angular/core';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {AuthRoutingModule} from './auth-routing.module';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

@NgModule({
    imports: [
        AuthRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: [
        SigninComponent,
        SignupComponent
    ]
})
export class AuthModule {

}
