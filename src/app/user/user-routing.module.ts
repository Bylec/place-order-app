import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {USER_ROLE} from '../shared/models/role.model';
import {UserComponent} from './user/user.component';
import {AuthorizationGuard} from '../shared/guards/authorization.guard';
import {OrderComponent} from './order/order.component';
import {OrderListComponent} from './order-list/order-list.component';

const userRoutes = [
    {
        path: '',
        component: UserComponent,
        data: {
            allowedRoles: [USER_ROLE]
        },
        canActivate: [AuthorizationGuard],
        children: [
            {
                path: '',
                component: OrderComponent
            },
            {
                path: 'order-list',
                component: OrderListComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule {

}
