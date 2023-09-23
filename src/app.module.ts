import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SectorsController } from './sectors/sectors.controller';
import { SectorsService } from './sectors/sectors.service';
import { ConfigModule } from '@nestjs/config';
import { SectorsModule } from './sectors/sectors.module';

ConfigModule.forRoot() // import the ENV file

@Module({
  imports: [MongooseModule.forRoot(`${process.env.MONGOURL}`, {dbName: 'Andromeda'}), SectorsModule],
  controllers: [AppController, SectorsController],
  providers: [AppService, SectorsService],
})
export class AppModule {}
