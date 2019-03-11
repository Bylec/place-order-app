import {Injectable, OnInit} from '@angular/core';
import {Menu} from '../models/menu.model';
import {ConfigService} from './config.service';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Dinner, FIRST_COURSE, MAIN_COURSE} from '../models/dinner.model';
import {Observable} from 'rxjs';

@Injectable()
export class OrderService implements OnInit {

    ngOnInit() {

    }

    constructor(private configService: ConfigService,
                private http: HttpClient) {

    }

    storeMenu(currentMenu: Menu) {
        const saveData = {dinners: [], restaurant_id: 1};
        saveData.dinners.push(...currentMenu.firstCourse);
        saveData.dinners.push(...currentMenu.mainCourse);
        const url = this.configService.getBackendUrl();
        const headers = new HttpHeaders().set('X-Requested-With', 'XMLHttpRequest');
        this.http.post(url + 'menu',
            saveData,
            {
                observe: 'response', headers: headers
            })
            .pipe(map((res: HttpResponse<{ status: string, menu: Menu }>) => {
                console.log(res);
                return res.body.menu;
            }))
            .subscribe(
                (menu: Menu) => {

                }
            );
    }

    getCurrentMenu() {
        const url = this.configService.getBackendUrl() + 'menu';
        return this.http.get(url, {observe: 'response'})
            .pipe(map((res: HttpResponse<{ status: string, menu }>) => {
                const fetchedMenu = res.body.menu;
                let firstCourses = [];
                let mainCourses = [];
                if (fetchedMenu) {
                    firstCourses = res.body.menu.dinners.filter(
                        (dinner: Dinner) => dinner.category_id === MAIN_COURSE
                    );
                    mainCourses = res.body.menu.dinners.filter(
                        (dinner: Dinner) => dinner.category_id === FIRST_COURSE
                    );
                }
                return new Menu(firstCourses, mainCourses);
            }));
    }

    countMenuSize(menu: Menu) {
        return menu.firstCourse.length + menu.mainCourse.length;
    }


}
