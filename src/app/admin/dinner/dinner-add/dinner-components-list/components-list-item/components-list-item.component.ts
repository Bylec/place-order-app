import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Component as DinnerComponent} from '../../../../../shared/models/component.model';
import {DinnerService} from '../../../../../shared/services/dinner.service';
import {Subscription} from 'rxjs';
import {Dinner} from '../../../../../shared/models/dinner.model';

@Component({
    selector: 'app-components-list-item',
    templateUrl: './components-list-item.component.html',
    styleUrls: ['./components-list-item.component.css']
})
export class ComponentsListItemComponent implements OnInit, OnDestroy {
    @Input() component: DinnerComponent;
    componentHandledSubscription: Subscription;
    active: boolean;

    constructor(private dinnerService: DinnerService) {
    }

    ngOnInit() {
        this.setActiveComponents(this.dinnerService.getCheckedComponents());
        this.componentHandledSubscription = this.dinnerService.componentHandled.subscribe(
            (components: DinnerComponent[]) => {
                this.setActiveComponents(components);
            }
        );
    }

    setActiveComponents(components: DinnerComponent[]) {
        this.active = components.filter(
            (component: DinnerComponent) =>
                component.name === this.component.name
        ).length === 1;
    }

    onAddToDinner() {
        this.dinnerService.handleComponent(this.component);
    }

    deleteIngredient(event) {
        event.stopPropagation();
        this.dinnerService.deleteComponent(this.component);
        this.dinnerService.handleComponent(this.component);
    }

    ngOnDestroy() {
        this.componentHandledSubscription.unsubscribe();
    }

}
