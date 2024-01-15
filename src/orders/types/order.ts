import {
    IsArray,
  IsMongoId,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

export interface MealObject{
    id: string,
    quantity: number
}
export interface User{
    id:string,
    name:string
}
export class Order {
  @IsString()
  @IsMongoId()
  _id: string;
  @IsArray() meals: Array<MealObject>;
  @IsObject() user:Array<User>
  @IsNumber() tableNo:number
}
