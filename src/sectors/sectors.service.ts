import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SectorInterface } from 'src/interfaces/sector-and-systems';
import { sectorSchema } from 'src/schema/sectorSchema';

@Injectable()
export class SectorService {
  constructor(@InjectModel(sectorSchema.sectorName) private sectorModel: sectorSchema<SectorInterface>) {}


  async findAll(): Promise<SectorInterface[]> {
    return this.sectorModel.find().exec();
  }
}