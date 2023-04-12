import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { System } from "./system.schema";
import { Model } from "mongoose";
import { CreateSystemDto } from "./dtos/create-system.dto";

@Injectable()
export class SystemService {
    constructor(
        @InjectModel('System') private systemModel: Model<System>,
    ) {}

    async createSystem(system: CreateSystemDto): Promise<System> {
        const newSystem = new this.systemModel(system);
        return newSystem.save();
    }
}