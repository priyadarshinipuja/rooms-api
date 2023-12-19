import { IsBoolean, IsInt, IsMongoId, IsString } from 'class-validator';

export class Room {
  @IsString()
  @IsMongoId()
  _id: string;
  @IsInt({ message: 'roomNo must be numeric' }) roomNo: number;
  @IsString() image: string;
  @IsInt() price: number;
  @IsString() description: string;
  @IsString() type: string;
  @IsString() category: string;
  @IsInt() capacity: number;
  @IsInt() floorNo: number;
  @IsBoolean() isAvailable: boolean;
}
