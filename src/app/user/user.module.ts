import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
    ],
    declarations: [UserComponent, OrderComponent, OrderListComponent]
})
export class UserModule {


}
