import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    signupForm = this.fb.group({
        'email': [''],
        'password': ['']
    });

    constructor(private fb: FormBuilder,
                private authService: AuthService) {
    }

    onSubmit() {
        this.authService.signUp(this.signupForm.value.email, this.signupForm.value.password);
    }

}
