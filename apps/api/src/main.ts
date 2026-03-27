import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. Enable CORS
  // This allows your Next.js frontend to access the API
  app.enableCors({
    origin: 'http://localhost:3000', // Update this if your frontend port is different
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Rada API')
    .setDescription('The Rada platform API documentation')
    .setVersion('1.0')
    .addTag('profiles')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3001);
  console.log(`Server running at: http://localhost:3001`);
  console.log(`Swagger docs at: http://localhost:3001/api/docs`);
}
bootstrap();
