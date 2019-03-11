import {Role} from './role.model';

export class User {
    id: number;
    email: string;
    role: Role;
    token?: string;
}
