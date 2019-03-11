import {NgModule} from '@angular/core';
import {CurrentMenuComponent} from './current-menu/current-menu.component';
import {OrderHistoryComponent} from './order-history/order-history.component';
import {CommonModule} from '@angular/common';
import {OrderComponent} from './order/order.component';
import {OrderRoutingModule} from './order-routing.module';
import {DinnerDetailsComponent} from '../dinner/dinner-details/dinner-details.component';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        OrderRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: [
        CurrentMenuComponent,
        OrderHistoryComponent,
        OrderComponent,
        DinnerDetailsComponent
    ]
})
export class OrderModule {

}
