import { IsString } from "class-validator";


export class CreateSystemPlanetDto {
    @IsString()
    name: string;
    
    @IsString()
    ownership: string; 
}