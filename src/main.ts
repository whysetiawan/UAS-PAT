import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });
  const port = process.env.PORT ?? 3000;
  const docsConfig = new DocumentBuilder()
    .setTitle('CAYN API Documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, docsConfig);
  SwaggerModule.setup('docs', app, document);

<<<<<<< Updated upstream
  await app.listen(3000);
=======
  app.setGlobalPrefix('api/v1');
  await app.listen(port);
  console.log('listening to port', port);
>>>>>>> Stashed changes
}
bootstrap();
