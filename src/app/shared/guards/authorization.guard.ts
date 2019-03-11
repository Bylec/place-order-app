import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, Route, CanLoad} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {ADMIN_ROLE} from '../models/role.model';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private router: Router, private authService: AuthService) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const currentUser = this.authService.currentUserValue;
        console.log('canActivate');
        if (currentUser) {
            const root = next.root;
            console.log(root);
            if (root.firstChild.data.allowedRoles && root.firstChild.data.allowedRoles.indexOf(currentUser.role) === -1) {
                let redirect = '/';
                if (currentUser.role === ADMIN_ROLE) {
                    redirect = '/admin';
                }
                this.router.navigate([redirect]);
                return false;
            }

            return true;
        }

        this.router.navigate(['/signin']);
        return false;
    }

    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log('canActivateChild');
        return this.canActivate(next, state);
    }

    canLoad(route: Route) {
        console.log(route);
        if (this.authService.isAdmin) {
            return true;
        }

        this.router.navigate(['/sigin']);
        return false;
    }
}
