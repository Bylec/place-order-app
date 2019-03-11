import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DinnerEditComponent} from './dinner-add/dinner-edit/dinner-edit.component';
import {DinnerComponent} from './dinner/dinner.component';
import {DinnerListComponent} from './dinner-list/dinner-list.component';
import {CommonModule} from '@angular/common';
import {DinnerRoutingModule} from './dinner-routing.module';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import {DinnerAddComponent} from './dinner-add/dinner-add.component';
import {DinnerComponentsListComponent} from './dinner-add/dinner-components-list/dinner-components-list.component';
import {MainCourseListComponent} from './dinner-list/main-course-list/main-course-list.component';
import {FirstCourseListComponent} from './dinner-list/first-course-list/first-course-list.component';
import {ComponentsListItemComponent} from './dinner-add/dinner-components-list/components-list-item/components-list-item.component';
import {DinnerCoursePipe} from '../../shared/pipes/dinner-course.pipe';
import {CourseItemComponent} from './dinner-list/course-item/course-item.component';
import {MaterialModule} from '../../shared/material.module';
import {DinnerSearchPipe} from '../../shared/pipes/dinner-search.pipe';
import {ComponentSearchPipe} from './dinner-add/dinner-components-list/component-search.pipe';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    imports: [
        CommonModule,
        DinnerRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule,
        MaterialModule,
        NgxPaginationModule
    ],
    declarations: [
        DinnerComponent,
        DinnerListComponent,
        DinnerEditComponent,
        DinnerAddComponent,
        DinnerComponentsListComponent,
        MainCourseListComponent,
        FirstCourseListComponent,
        ComponentsListItemComponent,
        CourseItemComponent,
        DinnerCoursePipe,
        DinnerSearchPipe,
        ComponentSearchPipe
    ]
})
export class DinnerModule {

}
