import {
  IsEmail,
  IsMongoId,
  IsObject,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class User {
  @IsString()
  @IsMongoId()
  _id: string;
  @IsString() firstName: string;
  @IsString() lastName: string;
  @IsEmail() email: string;
  @IsPhoneNumber() mobile: string;
  @IsString() purpose: string;
  @IsObject() address: object;
}
