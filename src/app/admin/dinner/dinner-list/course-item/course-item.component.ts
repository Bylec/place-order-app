import {Component, Input, OnInit} from '@angular/core';
import {Dinner} from '../../../../shared/models/dinner.model';
import {DinnerService} from '../../../../shared/services/dinner.service';
import {Menu} from '../../../../shared/models/menu.model';
import {OrderService} from '../../../../shared/services/order.service';

@Component({
    selector: 'app-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
    @Input() dinner: Dinner;
    isMenuAdded: boolean;

    constructor(private dinnerService: DinnerService, private orderService: OrderService) {
    }

    ngOnInit() {
        this.orderService.getCurrentMenu().subscribe(
            (menu: Menu) => {
                this.isMenuAdded = this.orderService.countMenuSize(menu) !== 0;
            }
        );
    }

    onCourseClick() {
        if (!this.isMenuAdded) {
            this.dinnerService.handleDinner(this.dinner);
        }
    }

    onDinnerDelete() {
        if (!this.isMenuAdded) {
            this.dinnerService.deleteDinner(this.dinner);
        }
    }
}
