import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBuildingDto } from 'src/buildings/dto/create-building.dto';
import { IBuilding } from 'src/buildings/building.interface';
import { Model } from 'mongoose';
import { UpdateBuildingDto } from 'src/buildings/dto/update-building.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BuildingService {
  constructor(
    @InjectModel('Building') private buildingModel: Model<IBuilding>,
  ) {}

  async createBuilding(
    createBuildingDto: CreateBuildingDto,
  ): Promise<IBuilding> {
    const newBuilding = new this.buildingModel(createBuildingDto);
    return newBuilding.save();
  }

  async updateBuilding(
    buildingId: string,
    updateBuildingDto: UpdateBuildingDto,
  ): Promise<IBuilding> {
    const existingBuilding = await this.buildingModel.findByIdAndUpdate(
      buildingId,
      updateBuildingDto,
    );
    if (!existingBuilding) {
      throw new NotFoundException(`Building #${buildingId} not found`);
    }
    return existingBuilding;
  }

  async getAllBuildings(): Promise<IBuilding[]> {
    const buildingData = await this.buildingModel.find();
    if (!buildingData || buildingData.length == 0) {
      throw new NotFoundException('Buildings data not found!');
    }
    return buildingData;
  }

  async getBuilding(buildingId: string): Promise<IBuilding> {
    const existingBuilding = await this.buildingModel
      .findById(buildingId)
      .exec();
    if (!existingBuilding) {
      throw new NotFoundException(`Building #${buildingId} not found`);
    }
    return existingBuilding;
  }

  async deleteBuilding(buildingId: string): Promise<IBuilding> {
    const deletedBuilding = await this.buildingModel.findByIdAndDelete(
      buildingId,
    );
    if (!deletedBuilding) {
      throw new NotFoundException(`Building #${buildingId} not found`);
    }
    return deletedBuilding;
  }
}
