import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SectorsController } from './sectors/sectors.controller';
import { SectorsService } from './sectors/sectors.service';
import { ConfigModule } from '@nestjs/config';
import { SectorModule } from './sectors/sectors.module';

ConfigModule.forRoot() // import the ENV file

@Module({
  imports: [MongooseModule.forRoot(`${process.env.MONGO_URL}`, {dbName: 'Andromeda'}), SectorModule],
  controllers: [SectorsController],
  providers: [SectorsService],
})
export class AppModule {}
