const mongoose =  require('mongoose');
import { System } from "src/interfaces/system";
import { NCO } from "src/interfaces/NCO";

const sectorSchema = new mongoose.Schema(
  {
    systems: { type: Array<System>, required: true },
    NCO: { type: Array<NCO>, required: true },
    sectorName: { type: String, required: true },
    fleetsInTransit: []
  }
);

//export type SectorModel = mongoose.InferSchemaType<typeof sectorSchema>; //throws error, not sure if needed
export const SectorModel = mongoose.model('Sector', sectorSchema);