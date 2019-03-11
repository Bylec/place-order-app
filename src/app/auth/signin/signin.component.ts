import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent {

    signinForm = this.fb.group({
        email: ['', Validators.required],
        password: ['']
    });

    constructor(private fb: FormBuilder,
                private authService: AuthService) {
    }

    onSubmit() {
        this.authService.signIn(this.signinForm.value.email, this.signinForm.value.password);
    }

}
