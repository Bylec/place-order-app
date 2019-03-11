import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DinnerComponent} from './dinner/dinner.component';
import {DinnerListComponent} from './dinner-list/dinner-list.component';
import {DinnerAddComponent} from './dinner-add/dinner-add.component';
import {AuthorizationGuard} from '../../shared/guards/authorization.guard';
import {ADMIN_ROLE} from '../../shared/models/role.model';

const dinnerRoutes: Routes = [
    {
        path: 'dinner',
        component: DinnerComponent,
        canActivateChild: [AuthorizationGuard],
        data: {
            allowedRoles: [ADMIN_ROLE]
        },
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'add', component: DinnerAddComponent},
            { path: 'list', component: DinnerListComponent},
            { path: 'edit/:id', component: DinnerAddComponent}
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dinnerRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DinnerRoutingModule {

}
