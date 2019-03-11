import {Component} from './component.model';

export const FIRST_COURSE = 2;
export const MAIN_COURSE = 1;

export class Dinner {
    id: number;
    name: string;
    price: number;
    photo: string;
    category_id: number;
    restaurant_id: number;
    components: Component[];
}
