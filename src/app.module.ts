import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SectorsController } from './sectors/controller/sectors.controller';
import { SectorsService } from './sectors/service/sectors.service';

@Module({
  // imports: [MongooseModule.forRoot(`${process.env.MONGOURL}`)],
  controllers: [AppController, SectorsController],
  providers: [AppService, SectorsService],
})
export class AppModule {}
