import {Component, Input, OnInit} from '@angular/core';
import {Dinner} from '../../../../shared/models/dinner.model';

@Component({
    selector: 'app-first-course-list',
    templateUrl: './first-course-list.component.html',
    styleUrls: ['./first-course-list.component.css']
})
export class FirstCourseListComponent implements OnInit {
    @Input() dinners: Dinner[];
    @Input() checkedDinnerIds;
    type = 'first-course';
    searchDinnerName: string;
    p: number;

    constructor() {
        this.searchDinnerName = '';
        this.p = 1;
    }

    ngOnInit() {

    }

}
