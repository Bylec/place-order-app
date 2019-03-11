import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Dinner} from '../../../shared/models/dinner.model';
import {DinnerService} from '../../../shared/services/dinner.service';
import {Menu} from '../../../shared/models/menu.model';
import {OrderService} from '../../../shared/services/order.service';

@Component({
    selector: 'app-dinner-list',
    templateUrl: './dinner-list.component.html',
    styleUrls: ['./dinner-list.component.css']
})
export class DinnerListComponent implements OnInit {
    dinners: Observable<Dinner[]>;
    dinnerHandledSubscription: Subscription;
    checkedDinnerIds = [];

    isMenuAdded: boolean;

    constructor(private dinnerService: DinnerService, private orderService: OrderService) {
        this.isMenuAdded = false;
    }

    ngOnInit() {
        this.dinners = this.dinnerService.getDinners();
        this.dinnerService.dinnerRemovedFromList.subscribe(
            () => {
                this.dinners = this.dinnerService.getDinners();
            }
        );

        this.setDinnerIds(this.dinnerService.getCurrentMenu());
        this.dinnerHandledSubscription = this.dinnerService.dinnerHandled.subscribe(
            (menu: Menu) => {
                this.setDinnerIds(menu);
            }
        );

        this.orderService.getCurrentMenu().subscribe(
            (menu: Menu) => {
                this.isMenuAdded = this.orderService.countMenuSize(menu) !== 0;
            }
        );
    }

    setDinnerIds(menu: Menu) {
        this.checkedDinnerIds['first-course'] = [];
        this.checkedDinnerIds['main-course'] = [];
        menu.firstCourse.forEach(
            (dinner: Dinner) => {
                this.checkedDinnerIds['first-course'].push(dinner.id);
            }
        );
        menu.mainCourse.forEach(
            (dinner: Dinner) => {
                this.checkedDinnerIds['main-course'].push(dinner.id);
            }
        );
    }

}
