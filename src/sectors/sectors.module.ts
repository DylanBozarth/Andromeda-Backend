import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SectorSchema } from 'src/schema/sectorSchema';
import { SectorsController } from './sectors.controller';
import { SectorsService } from './sectors.service';


@Module({
    imports: [
      MongooseModule.forFeature([{ name: 'Product', schema: SectorSchema }]),
    ],
    controllers: [SectorsController],
    providers: [SectorsService],
  })
export class SectorsModule {}
