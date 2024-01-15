import {
  IsMongoId,
  IsNumber,
  IsString,
} from 'class-validator';

export class Meal {
  @IsString()
  @IsMongoId()
  _id: string;
  @IsString() title: string;
  @IsString() description: string;
  @IsString() category: string;
  @IsString() subCategory: string;
  @IsString() type: string;
  @IsString() image: string;
  @IsNumber() qty: number;
  @IsNumber() price: number;
}
