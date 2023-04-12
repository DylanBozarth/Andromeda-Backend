import { Body, Controller, Post, Res } from "@nestjs/common";
import { SystemPlanetService } from "./system-planet.service";
import { CreateSystemPlanetDto } from "./dtos/create-system-planet.dto";

@Controller('system-planet')
export class SysntemPlanetController {
    constructor(
        private readonly systemPlanetService: SystemPlanetService
    ) {}

    @Post('/create')
    async createSystemPlanet(
        @Res() res,
        @Body() systemPlanet: CreateSystemPlanetDto
    ) {
        try {
        const newPlanet = this.systemPlanetService.createSystemPlanet(systemPlanet);
        return res.status(201).json({
            message: 'System Planet has been created successfully',
            newPlanet
        })
        } catch(e) {
            res.status(400).json({
                statusCode: 400,
                message: 'Error: System Planet not created!',
                error: 'Bad Request',
            });
        }
        
    }
}