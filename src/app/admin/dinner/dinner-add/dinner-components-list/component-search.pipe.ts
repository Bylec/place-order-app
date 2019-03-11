import {Pipe, PipeTransform} from '@angular/core';
import {Component as DinnerComponent} from '../../../../shared/models/component.model';

@Pipe({name: 'componentSearch'})
export class ComponentSearchPipe implements PipeTransform {
    transform(components: DinnerComponent[], searchText: string) {
        if (searchText === '') {
            return components;
        }
        searchText = searchText.toLowerCase();
        return components.filter(component => component.name.toLowerCase().includes(searchText) );
    }
}
