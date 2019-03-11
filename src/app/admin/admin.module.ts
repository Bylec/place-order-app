import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';

import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {DinnerModule} from './dinner/dinner.module';
import {OrderModule} from './order/order.module';
import {AdminComponent} from './admin/admin.component';


@NgModule({
    imports: [
        CommonModule,
        DinnerModule,
        OrderModule,
        AdminRoutingModule,
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent
    ]
})
export class AdminModule {
}
