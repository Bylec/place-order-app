import {Dinner} from '../models/dinner.model';
import {Subject} from 'rxjs';
import {Component as DinnerComponent} from '../models/component.model';
import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ConfigService} from './config.service';
import {AuthService} from './auth.service';
import {OrderService} from './order.service';
import {Menu} from '../models/menu.model';

@Injectable()
export class DinnerService {
    dinnerRemovedFromList = new Subject<any>();
    dinnerModified = new Subject<any>();
    componentDeleted = new Subject<any>();

    checkedComponents: DinnerComponent[];
    componentHandled = new Subject<DinnerComponent[]>();

    dinnerHandled = new Subject<Menu>();
    currentMenu = new Menu([], []);
    menuCount = new Subject<number>();

    constructor(private configService: ConfigService,
                private authService: AuthService,
                private orderService: OrderService,
                private http: HttpClient) {
        this.checkedComponents = [];
    }

    storeDinner(dinner: Dinner) {
        dinner = {...dinner, restaurant_id: 1, price: 15};
        const url = this.configService.getBackendUrl();
        this.http.post(url + 'dinners',
            dinner,
            {
                observe: 'response'
            })
            .pipe(map((res: HttpResponse<{ status: string, dinner: Dinner }>) => {
                return res.body.dinner;
            }))
            .subscribe((returnedDinner: Dinner) => {
                this.dinnerModified.next();
                this.setCheckedComponents(returnedDinner.components);
            });
    }

    updateDinner(updatedDinner: Dinner) {
        updatedDinner = {...updatedDinner, restaurant_id: 1, price: 15};
        const url = this.configService.getBackendUrl();
        this.http.put(url + 'dinners/' + updatedDinner.id,
            updatedDinner,
            {
                observe: 'response'
            })
            .pipe(map((res: HttpResponse<{ status: string, dinner: Dinner }>) => {
                return res.body.dinner;
            }))
            .subscribe((returnedDinner: Dinner) => {
                this.dinnerModified.next();
                this.setCheckedComponents(returnedDinner.components);
            });
    }

    deleteDinner(dinner: Dinner) {
        const url = this.configService.getBackendUrl();
        return this.http.delete(url + 'dinners/' + dinner.id,
            {
                observe: 'response'
            })
            .pipe(map((res: HttpResponse<any>) => {
            }))
            .subscribe(() => {
                this.dinnerRemovedFromList.next();
            });
    }

    deleteComponent(component: DinnerComponent) {
        const url = this.configService.getBackendUrl();
        return this.http.delete(url + 'components/' + component.id,
            {
                observe: 'response'
            })
            .pipe(map((res: HttpResponse<any>) => {
                return res.body;
            }))
            .subscribe(() => {
                this.componentDeleted.next();
            });
    }

    getDinners() {
        const url = this.configService.getBackendUrl() + 'dinners';
        return this.http.get(url, {observe: 'response'})
            .pipe(map((res: HttpResponse<{ status: string, dinners: Dinner[] }>) => {
                return res.body.dinners;
            }));
    }

    getDinnerById(id: number) {
        const url = this.configService.getBackendUrl() + 'dinners/' + id;
        return this.http.get(url, {observe: 'response'})
            .pipe(map((res: HttpResponse<{ status: string, dinner: Dinner }>) => {
                return res.body.dinner;
            }));
    }

    getIngredients() {
        const url = this.configService.getBackendUrl() + 'components';
        return this.http.get(url, {observe: 'response'})
            .pipe(map((res: HttpResponse<{ status: string, components: DinnerComponent[] }>) => {
                return res.body.components;
            }));
    }

    getCurrentMenu() {
        return this.currentMenu;
    }

    handleDinner(dinner: Dinner) {
        let changed = false;
        const dinnerType = dinner.category_id === 1 ? 'mainCourse' : 'firstCourse';
        const delimiter = dinnerType === 'mainCourse' ? 2 : 1;

        const index = this.currentMenu[dinnerType].findIndex((obj: Dinner) => {
            return obj.id === dinner.id;
        });

        if (index === -1 && this.currentMenu[dinnerType].length < delimiter) {
            this.currentMenu[dinnerType].push(dinner);
            changed = true;
        } else if (index !== -1) {
            this.currentMenu[dinnerType].splice(index, 1);
            changed = true;
        }
        if (changed) {
            this.dinnerHandled.next(this.currentMenu);
            this.menuCount.next(this.currentMenu.firstCourse.length + this.currentMenu.mainCourse.length);
        }
    }

    setCheckedComponents(components: DinnerComponent[]) {
        this.checkedComponents = components;
        this.componentHandled.next(this.checkedComponents);
    }

    getCheckedComponents() {
        return this.checkedComponents;
    }

    handleComponent(component: DinnerComponent) {
        let changed = false;
        const delimiter = 3;

        const index = this.checkedComponents.findIndex((obj: DinnerComponent) => {
            return obj.id === component.id;
        });

        if (index === -1 && this.checkedComponents.length < delimiter) {
            this.checkedComponents.push(component);
            changed = true;
        } else if (index !== -1) {
            this.checkedComponents.splice(index, 1);
            changed = true;
        }

        if (changed) {
            this.componentHandled.next(this.checkedComponents);
        }
    }

    setCurrentMenu(firstCourse: Array<Dinner|null>, mainCourse: Array<Dinner|null>) {
        this.currentMenu = new Menu(firstCourse, mainCourse);
    }

}
