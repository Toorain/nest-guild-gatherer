import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs'

async function bootstrap() {
  const keyFile  = fs.readFileSync('../cert/key.pem');
  const certFile = fs.readFileSync('../cert/cert.pem');


  const app = await NestFactory.create(AppModule, {
    httpsOptions: {
      key: keyFile,
      cert: certFile
    }
  });
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
