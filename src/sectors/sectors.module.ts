import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { sectorSchema } from 'src/schema/sectorSchema';
import { SectorsController } from './sectors.controller';
import { SectorService } from './sectors.service';


@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'Sector', schema: sectorSchema }]),
    ],
    controllers: [SectorsController],
    providers: [SectorService],
  })
export class SectorsModule {}
