export class Component {
    id: number;
    name: string;
    type: string;
}

export const primaryMainCourseComponent = 'primary_main_course';
export const addonMainCourseComponent = 'addon_main_course';
export const saladAddonMainCourseComponent = 'salad_addon_main_course';
export const primaryFirstCourseComponent = 'primary_first_course';
export const addonFirstCourseComponent = 'addon_first_course';
export const otherComponent = 'other';

export const ComponentTypes = [
    {value: primaryMainCourseComponent, viewValue: 'Główny składnik drugiego dania'},
    {value: addonMainCourseComponent, viewValue: 'Dodatek do drugiego dania'},
    {value: saladAddonMainCourseComponent, viewValue: 'Dodatek sałatkowy do drugiego dania'},
    {value: primaryFirstCourseComponent, viewValue: 'Zupa'},
    {value: addonFirstCourseComponent, viewValue: 'Dodatek do zupy'},
    {value: otherComponent, viewValue: 'Inne'}
];
