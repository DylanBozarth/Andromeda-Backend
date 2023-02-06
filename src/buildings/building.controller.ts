import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { CreateBuildingDto } from 'src/buildings/dto/create-building.dto';
import { UpdateBuildingDto } from 'src/buildings/dto/update-building.dto';
import { BuildingService } from 'src/buildings/building.service';

@Controller('building')
export class BuildingController {
  constructor(private readonly buildingService: BuildingService) {}

  @Post()
  async createBuilding(
    @Res() response,
    @Body() createBuildingDto: CreateBuildingDto,
  ) {
    try {
      const newBuilding = await this.buildingService.createBuilding(
        createBuildingDto,
      );
      return response.status(HttpStatus.CREATED).json({
        message: 'Building has been created successfully',
        newBuilding,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Building not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateBuilding(
    @Res() response,
    @Param('id') buildingId: string,
    @Body() updateBuildingDto: UpdateBuildingDto,
  ) {
    try {
      const existingBuilding = await this.buildingService.updateBuilding(
        buildingId,
        updateBuildingDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Building has been successfully updated',
        existingBuilding,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get()
  async getBuildings(@Res() response) {
    try {
      const buildingData = await this.buildingService.getAllBuildings();
      return response.status(HttpStatus.OK).json({
        message: 'All buildings data found successfully',
        buildingData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getBuilding(@Res() response, @Param('id') buildingId: string) {
    try {
      const existingBuilding = await this.buildingService.getBuilding(
        buildingId,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Building found successfully',
        existingBuilding,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteBuilding(@Res() response, @Param('id') buildingId: string) {
    try {
      const deletedBuilding = await this.buildingService.deleteBuilding(
        buildingId,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Building deleted successfully',
        deletedBuilding,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
