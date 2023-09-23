const mongoose =  require('mongoose');
import { SystemInterface } from "src/interfaces/sector-and-systems";
import { NCOInterface } from "src/interfaces/sector-and-systems";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
const sectorSchema = new mongoose.Schema(
  {
    systems: { type: Array<SystemInterface>, required: true },
    NCO: { type: Array<NCOInterface>, required: true },
    sectorName: { type: String, required: true },
    fleetsInTransit: []
  }
); 

export const SectorSchema = SchemaFactory.createForClass(sectorSchema);