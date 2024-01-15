import {
    IsArray,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { Meal } from '../../meals/types/meals';
import { User } from 'src/users/types/user';

export class Restaurant {
  @IsString()
  @IsMongoId()
  _id: string;
  @IsString() name: string;
  @IsString() description: string;
  @IsEmail() email: string;
  @IsPhoneNumber() mobile: string;
  @IsOptional()
  @IsArray() images: Array<string>;
  @IsObject() address: object;
  @IsOptional()
  @IsObject() user : User[];
  @IsOptional()
  @IsArray() meal : Meal[];
  @IsNotEmpty()
  @IsNumber() noOfTables:number;
}
