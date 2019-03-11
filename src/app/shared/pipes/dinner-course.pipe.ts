import {Pipe, PipeTransform} from '@angular/core';
import {Dinner} from '../models/dinner.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Pipe({name: 'dinnerCourse'})
export class DinnerCoursePipe implements PipeTransform {
    transform(dinnersObservable: Observable<Dinner[]>, courseType: string) {
        let category;
        if (courseType === 'main-course') {
            category = 1;
        } else if (courseType === 'first-course') {
            category = 2;
        }
        return dinnersObservable.pipe(
            map((dinners: Dinner[]) => {
                return dinners.filter(dinner => dinner.category_id === category);
            })
        );
    }
}
