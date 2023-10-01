import { Controller, Get, Req } from '@nestjs/common';
import { SectorInterface } from 'src/interfaces/sector-and-systems';

@Controller('sectors')
export class SectorsController {
    @Get('/sectors')
    async findAll(): Promise<any> {
        return 'hell yeah';
      }
}
