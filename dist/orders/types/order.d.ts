export interface MealObject {
    id: string;
    quantity: number;
}
export interface User {
    id: string;
    name: string;
}
export declare class Order {
    _id: string;
    meals: Array<MealObject>;
    user: Array<User>;
    tableNo: number;
}
