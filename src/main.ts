import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';
ConfigModule.forRoot() // import the ENV file
const port = process.env.PORT || 3000;
console.log('Mongo url is:', process.env.MONGOURL)
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port, "0.0.0.0", function () {
    console.log("mongo url", process.env.MONGO_URL)
  });;
}
bootstrap();
