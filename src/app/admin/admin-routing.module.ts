import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {AdminComponent} from './admin/admin.component';
import {AuthorizationGuard} from '../shared/guards/authorization.guard';
import {ADMIN_ROLE} from '../shared/models/role.model';

const adminRoutes = [
    {
        path: 'admin',
        component: AdminComponent,
        data: {
            allowedRoles: [ADMIN_ROLE]
        },
        canActivateChild: [AuthorizationGuard],
        children: [
            {
                path: '',
                component: AdminDashboardComponent, pathMatch: 'full',
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {

}
