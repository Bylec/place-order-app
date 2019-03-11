import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {ConfigService} from './config.service';
import {map} from 'rxjs/operators';
import {InterceptorSkipHeader} from './const.service';
import {User} from '../models/user.model';
import {Role, ADMIN_ROLE, USER_ROLE} from '../models/role.model';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
    public currentUser: User;

    constructor(private http: HttpClient,
                private configService: ConfigService,
                private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    public get currentUserValue(): User {
        return this.currentUser;
    }

    signUp(email: string, password: string) {
        const url = this.configService.getBackendUrl(null);
        const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest').set(InterceptorSkipHeader, '');
        this.http.post(url + 'register',
            {email: email, password: password},
            {headers: headers, observe: 'response'}
        ).subscribe(
            () => {
            }
        );
    }

    signIn(email: string, password: string) {
        const url = this.configService.getBackendUrl(null);
        const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest').set(InterceptorSkipHeader, '');
        this.http.post(url + 'login',
            {email: email, password: password},
            {headers: headers, observe: 'response'})
            .pipe(map((res: HttpResponse<{ status: string, token: string, user }>) => {
                const user = new User();
                user.id = res.body.user.id;
                user.email = res.body.user.email;
                user.role = res.body.user.role_id;
                user.token = res.body.token;
                return user;
            }))
            .subscribe(
                (user: User) => {
                    this.currentUser = user;
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.router.navigate(['/']);
                }
            );
    }

    isAdmin() {
        return this.currentUser !== null && this.currentUser.role === ADMIN_ROLE;
    }

    isUser() {
        return this.currentUser !== null && this.currentUser.role === USER_ROLE;
    }

    isAuthenticated() {
        return this.currentUser != null;
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        this.router.navigate(['/signin']);
    }

}
