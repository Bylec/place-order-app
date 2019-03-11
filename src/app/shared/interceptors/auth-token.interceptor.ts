import {HttpEvent, HttpInterceptor} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';
import {HttpRequest} from '../../../../node_modules/@angular/common/http/src/request';
import {HttpHandler} from '../../../../node_modules/@angular/common/http/src/backend';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.authService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`,
                },
                headers: request.headers.set('X-Requested-With', 'XMLHttpRequest')
            });
        }
        return next.handle(request);
    }
}
