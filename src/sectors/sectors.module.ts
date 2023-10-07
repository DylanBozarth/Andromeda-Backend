import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { sectorSchema } from '../schema/sectorSchema';
import { SectorsService } from './sectors.service';
import { SectorsController } from './sectors.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Sector', schema: sectorSchema }])],
  providers: [SectorsService],
  controllers: [SectorsController],
})
export class sectorModule {}