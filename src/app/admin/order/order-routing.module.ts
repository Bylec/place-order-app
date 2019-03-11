import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DinnerComponent} from '../dinner/dinner/dinner.component';
import {CurrentMenuComponent} from './current-menu/current-menu.component';
import {OrderHistoryComponent} from './order-history/order-history.component';
import {AuthorizationGuard} from '../../shared/guards/authorization.guard';
import {ADMIN_ROLE} from '../../shared/models/role.model';

const orderRoutes: Routes = [
    {
        path: 'order',
        component: DinnerComponent,
        canActivate: [AuthorizationGuard],
        data: {
            allowedRoles: [ADMIN_ROLE]
        },
        children: [
            {
                path: '',
                canActivateChild: [AuthorizationGuard],
                children: [
                    {path: '', component: CurrentMenuComponent},
                    {path: 'history', component: OrderHistoryComponent}
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(orderRoutes)
    ],
    exports: [RouterModule]
})
export class OrderRoutingModule {

}
