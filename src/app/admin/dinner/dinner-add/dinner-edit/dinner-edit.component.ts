import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DinnerService} from '../../../../shared/services/dinner.service';
import {Dinner} from '../../../../shared/models/dinner.model';
import {
    Component as DinnerComponent,
    ComponentTypes
} from '../../../../shared/models/component.model';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-dinner-edit',
    templateUrl: './dinner-edit.component.html',
    styleUrls: ['./dinner-edit.component.css']
})
export class DinnerEditComponent implements OnInit, OnChanges, OnDestroy {
    @Input() dinner: Dinner;
    @Input() id: number;

    componentHandledSubscription: Subscription;

    dinnerType: string;
    editMode: boolean;
    editDinnerForm: FormGroup;

    dinnerCourseTypes = [
        {value: 'first-course', viewValue: 'Zupa'},
        {value: 'main-course', viewValue: 'Drugie danie'}
    ];

    componentsTypes = ComponentTypes;

    constructor(private fb: FormBuilder,
                private dinnerService: DinnerService) {
    }

    ngOnInit() {
        this.componentHandledSubscription = this.dinnerService.componentHandled.subscribe(
            (components: DinnerComponent[]) => {
                while (this.components.length !== 0) {
                    this.components.removeAt(0);
                }
                components.forEach((component: DinnerComponent) => {
                    this.addIngredientInput(component);
                });
            }
        );
    }

    ngOnChanges() {
        this.editMode = false;
        let name = '';
        let photo = '';
        this.dinnerType = 'main-course';

        const components = this.fb.array([]);

        if (this.dinner !== null) {
            this.editMode = true;
            name = this.dinner.name;
            photo = this.dinner.photo;
            this.dinnerType = this.dinner.category_id === 1 ? 'main-course' : 'first-course';

            if (this.dinner.components) {
                for (const component of this.dinner.components) {
                    components.push(
                        this.fb.group({
                            name: this.fb.control(component.name, Validators.required),
                            type: this.fb.control(component.type, Validators.required)
                        })
                    );
                }
                this.dinnerService.setCheckedComponents(this.dinner.components);
            }
        } else {
            this.dinnerService.setCheckedComponents([]);
        }

        this.editDinnerForm = this.fb.group({
            type: [this.dinnerType],
            name: [name, Validators.required],
            photo: photo,
            components: components
        });

        this.editDinnerForm.controls['type'].setValue(this.dinnerType);
    }

    get components() {
        return this.editDinnerForm.get('components') as FormArray;
    }

    addIngredientInput(component = null) {
        let ingredientName = '';
        let ingredientType = '';
        if (component !== null) {
            ingredientName = component.name;
            ingredientType = component.type;
        }
        this.components.push(
            this.fb.group(
                {
                    name: this.fb.control(ingredientName, Validators.required),
                    type: this.fb.control(ingredientType, Validators.required)
                }
            )
        );
    }

    onDeleteIngredient(index: number) {
        this.components.removeAt(index);
        const components = this.dinnerService.getCheckedComponents();
        components.splice(index, 1);
        this.dinnerService.componentHandled.next(components);
    }

    onSubmit() {
        const dinner = new Dinner();
        dinner.name = this.editDinnerForm.value.name;
        dinner.photo = this.editDinnerForm.value.photo;
        dinner.category_id = this.editDinnerForm.value.type === 'first-course' ? 2 : 1;
        dinner.components = this.editDinnerForm.value.components;

        if (this.editMode) {
            dinner.id = this.id;
            this.dinnerService.updateDinner(dinner);
        } else {
            this.dinnerService.storeDinner(dinner);
        }
    }

    ngOnDestroy() {
        this.componentHandledSubscription.unsubscribe();
    }

}
