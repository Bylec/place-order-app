import {Pipe, PipeTransform} from '@angular/core';
import {Dinner} from '../models/dinner.model';

@Pipe({name: 'dinnerSearch'})
export class DinnerSearchPipe implements PipeTransform {
    transform(dinners: Dinner[], searchText: string) {
        if (searchText === '') {
            return dinners;
        }
        searchText = searchText.toLowerCase();
        return dinners.filter(dinner => dinner.name.toLowerCase().includes(searchText) );
    }
}
