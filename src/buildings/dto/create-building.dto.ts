import { IsNumber, IsString } from 'class-validator';

export class CreateBuildingDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly description: string;
  @IsString()
  readonly imageSrc: string;
  @IsNumber()
  readonly cost: number;
}
