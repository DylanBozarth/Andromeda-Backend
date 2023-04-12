import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { SystemPlanet } from "./system-planet.schema";
import { Model } from "mongoose";
import { CreateSystemPlanetDto } from "./dtos/create-system-planet.dto";

@Injectable()
export class SystemPlanetService {
  constructor(
    @InjectModel('SystemPlanet') private systemPlanetModel: Model<SystemPlanet>,
  ) {}

    async createSystemPlanet(systemPlanet: CreateSystemPlanetDto): Promise<SystemPlanet> {
        const newSystemPlanet = new this.systemPlanetModel(systemPlanet);
        return newSystemPlanet.save();
    }

}