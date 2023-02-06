import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingController } from './buildings/building.controller';
import { BuildingSchema } from './buildings/building.schema';
import { BuildingService } from './buildings/building.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, { dbName: 'andromeda' }),
    MongooseModule.forFeature([{ name: 'Building', schema: BuildingSchema }]),
  ],
  controllers: [AppController, BuildingController],
  providers: [AppService, BuildingService],
})
export class AppModule {}
