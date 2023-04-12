import { Body, Controller, Post, Res } from "@nestjs/common";
import { SystemService } from "./system.service";
import { CreateSystemDto } from "./dtos/create-system.dto";

@Controller('system')
export class SystemController {
    constructor(
        private readonly systemService: SystemService,
    ) {}

    @Post()
    async createSystem(
        @Res() response,
        @Body() system: CreateSystemDto,
    ) {
        try {
            const newSystem = this.systemService.createSystem(system);
            return response.status(201).json({
                message: 'System has been created successfully',
                newSystem
            })
        } catch (e) {
            response.status(400).json({
                statusCode: 400,
                message: 'Error: System not created!',
                error: 'Bad Request',
            });
        }

    }
}