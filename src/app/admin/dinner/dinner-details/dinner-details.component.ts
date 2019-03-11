import {Component, Input, OnInit} from '@angular/core';
import {Dinner} from '../../../shared/models/dinner.model';
import {DinnerService} from '../../../shared/services/dinner.service';

@Component({
    selector: 'app-dinner-details',
    templateUrl: './dinner-details.component.html',
    styleUrls: ['./dinner-details.component.css']
})
export class DinnerDetailsComponent implements OnInit {
    @Input() dinner: Dinner;
    @Input() isMenuAdded: boolean;

    constructor(private dinnerService: DinnerService) {
    }

    ngOnInit() {
    }

    onDeleteDinner() {
        this.dinnerService.handleDinner(this.dinner);
    }

}
