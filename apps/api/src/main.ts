import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Rada API')
    .setDescription('The Rada platform API documentation')
    .setVersion('1.0')
    .addTag('profiles')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3001);
  console.log(`http://localhost:3001/api/docs`);
}
bootstrap();
