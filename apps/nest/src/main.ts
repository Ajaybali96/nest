/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder().setTitle("Demo API Swagger")
  .setDescription('Demo Swagger')
  .setVersion('1.0')
  .setBasePath('api')
  .addBearerAuth()
  .addTag('Demo')
  .build()

  const document  = SwaggerModule.createDocument(app , options);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
  
}

bootstrap();
