import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingController } from './buildings/building.controller';
import { BuildingSchema } from './buildings/building.schema';
import { BuildingService } from './buildings/building.service';
import { ImageController } from './images/image.controller';
import { ImgurService } from './images/imgur.service';
import { SystemSchema } from './system/system.schema';
import { SystemPlanetSchema } from './system-planet/system-planet.schema';
import { SystemController } from './system/system.controller';
import { SystemService } from './system/system.service';
import { SystemPlanetService } from './system-planet/system-planet.service';
import { SysntemPlanetController } from './system-planet/system-planet.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.NODE_ENV === 'DEV'
        ? process.env.LOCAL_MONGO_URI
        : process.env.MONGO_URI,
      { dbName: 'andromeda' },
    ),
    MongooseModule.forFeature([{ name: 'Building', schema: BuildingSchema }]),
    MongooseModule.forFeature([{ name: 'System', schema:  SystemSchema}]),
    MongooseModule.forFeature([{ name: 'SystemPlanet', schema:  SystemPlanetSchema}]),
  ],
  controllers: [AppController, BuildingController, ImageController, SystemController, SysntemPlanetController],
  providers: [AppService, BuildingService, ImgurService, SystemService, SystemPlanetService],
})
export class AppModule {}
