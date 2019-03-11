import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Dinner} from '../../../shared/models/dinner.model';
import {ActivatedRoute, Params} from '@angular/router';
import {DinnerService} from '../../../shared/services/dinner.service';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-dinner-add',
    templateUrl: './dinner-add.component.html',
    styleUrls: ['./dinner-add.component.css']
})
export class DinnerAddComponent implements OnInit {
    dinner: Observable<Dinner> | null;
    id: number;
    type: string;

    constructor(private route: ActivatedRoute,
                private dinnerService: DinnerService) {
    }

    ngOnInit() {
        this.route.params
            .pipe(
                map((params: Params) => {
                    this.id = +params['id'];
                    this.type = params['type'];
                    return this.id;
                })
            )
            .subscribe(
                (id: number) => {
                    if (id) {
                        this.dinner = this.dinnerService.getDinnerById(id);
                    } else {
                        this.dinner = null;
                    }
                }
            );
    }
}
