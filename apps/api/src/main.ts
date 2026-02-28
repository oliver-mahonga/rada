import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Setup Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Rada API')
    .setDescription('The Rada platform API documentation')
    .setVersion('1.0')
    .addTag('profiles')
    .build();

  // 2. Create the Document
  const document = SwaggerModule.createDocument(app, config);

  // 3. Setup the UI at a specific path (e.g., 'api/docs')
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3001);
  console.log(`Application is running on: http://localhost:3001`);
  console.log(`Swagger UI available at: http://localhost:3001/api/docs`);
}
bootstrap();