import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthorizationGuard} from './shared/guards/authorization.guard';
import {ADMIN_ROLE} from './shared/models/role.model';

const routes = [
    {
        path: '',
        children: [],
        canActivateChild: [AuthorizationGuard]
    },
    {
        path: 'admin',
        data: {
            allowedRoles: [ADMIN_ROLE]
        },
        loadChildren: './admin/admin.module#AdminModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
