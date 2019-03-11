import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrderService} from '../../../shared/services/order.service';
import {Menu} from '../../../shared/models/menu.model';
import {DinnerService} from '../../../shared/services/dinner.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-current-order',
    templateUrl: './current-menu.component.html',
    styleUrls: ['./current-menu.component.css']
})
export class CurrentMenuComponent implements OnInit, OnDestroy {
    currentMenuSubscription: Subscription;
    menuCountSubscription: Subscription;

    currentMenu: Menu;
    menuCount: number;

    isMenuAdded: boolean;

    constructor(private dinnerService: DinnerService, private orderService: OrderService) {
        this.isMenuAdded = false;
        this.currentMenu = new Menu([], []);
        this.menuCount = 0;
    }

    ngOnInit() {
        this.currentMenuSubscription = this.orderService.getCurrentMenu().subscribe(
            (menu: Menu) => {
                if (menu.firstCourse.length > 0 && menu.mainCourse.length > 0) {
                    this.currentMenu = menu;
                    this.isMenuAdded = true;
                } else {
                    this.currentMenu = this.dinnerService.getCurrentMenu();
                    this.menuCountSubscription = this.dinnerService.menuCount.subscribe(
                        (amount: number) => {
                            this.menuCount = amount;
                        }
                    );
                }
                this.menuCount = this.orderService.countMenuSize(this.currentMenu);
            }
        );
    }

    onSaveMenu() {
        if (this.menuCount === 3) {
            this.orderService.storeMenu(this.currentMenu);
            this.isMenuAdded = true;
        }
        this.dinnerService.setCurrentMenu([], []);
    }

    ngOnDestroy() {
        if (!this.isMenuAdded) {
            this.menuCountSubscription.unsubscribe();
        }
        this.currentMenuSubscription.unsubscribe();
    }

}
