import { Meal } from '../../meals/types/meals';
import { User } from 'src/users/types/user';
export declare class Restaurant {
    _id: string;
    name: string;
    description: string;
    email: string;
    mobile: string;
    images: Array<string>;
    address: object;
    user: User[];
    meal: Meal[];
    noOfTables: number;
}
