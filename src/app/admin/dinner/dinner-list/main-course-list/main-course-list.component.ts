import {Component, Input, OnInit} from '@angular/core';
import {Dinner} from '../../../../shared/models/dinner.model';

@Component({
    selector: 'app-main-course-list',
    templateUrl: './main-course-list.component.html',
    styleUrls: ['./main-course-list.component.css']
})
export class MainCourseListComponent implements OnInit {
    @Input() dinners: Dinner[];
    @Input() checkedDinnerIds;
    type = 'main-course';
    searchDinnerName: string;
    p: number;

    constructor() {
        this.searchDinnerName = '';
        this.p = 1;
    }

    ngOnInit() {
    }

}
