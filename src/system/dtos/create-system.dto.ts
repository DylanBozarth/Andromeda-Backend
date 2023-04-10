import { IsString } from "class-validator";

export class CreateSystemDto {
    @IsString()
    systemStar: string;
    @IsString()
    systemName: string;
}