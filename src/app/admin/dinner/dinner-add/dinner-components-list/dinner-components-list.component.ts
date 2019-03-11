import {Component, OnDestroy, OnInit} from '@angular/core';
import {Component as DinnerComponent} from '../../../../shared/models/component.model';
import {DinnerService} from '../../../../shared/services/dinner.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-dinner-components-list',
    templateUrl: './dinner-components-list.component.html',
    styleUrls: ['./dinner-components-list.component.css']
})
export class DinnerComponentsListComponent implements OnInit, OnDestroy {
    components: DinnerComponent[];
    fetchComponentsSubscription: Subscription;
    searchComponentName: string;

    p: number;

    constructor(private dinnerService: DinnerService) {
        this.searchComponentName = '';
        this.p = 1;
    }

    ngOnInit() {
        this.fetchIngredients();
        this.dinnerService.dinnerModified.subscribe(
            () => {
                this.fetchIngredients();
            }
        );
        this.dinnerService.componentDeleted.subscribe(
            () => {
                this.fetchIngredients();
            }
        );
    }

    fetchIngredients() {
        this.fetchComponentsSubscription = this.dinnerService.getIngredients()
            .subscribe((components: DinnerComponent[]) => {
                this.components = components;
            });
    }

    ngOnDestroy() {
        this.fetchComponentsSubscription.unsubscribe();
    }

}
