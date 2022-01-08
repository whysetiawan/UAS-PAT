import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { RedocModule } from 'nestjs-redoc';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  console.log('the env is', process.env);
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // logger: console,
  });
  app.enableCors();
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());
  console.log('__dirname');
  app.useStaticAssets(join(__dirname, '..', 'client/dist'));
  app.setViewEngine('html');

  const port = process.env.PORT ?? 3000;
  const docsConfig = new DocumentBuilder()
    .setTitle('CAYN API Documentation')
    .setVersion('1.0')
    .addBearerAuth(
      {
        // I was also testing it without prefix 'Bearer ' before the JWT
        description: `Please enter token in following format: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer', // I`ve tested not to use this field, but the result was the same
        scheme: 'Bearer',
        type: 'http', // I`ve attempted type: 'apiKey' too
        in: 'Header',
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, docsConfig);
  SwaggerModule.setup('docs', app, document);
  // await RedocModule.setup('/docs', app, document, {});
  await app.listen(port);
  console.log('listening to port', port);
}

bootstrap();
