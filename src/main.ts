import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './filters/all-exception.filter';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

const { NODE_ENV = 'development', PORT = 3000 } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'log', 'verbose'],
  });

  app.enableCors();

  app.useGlobalFilters(new AllExceptionsFilter());

  app.useGlobalInterceptors(new TransformInterceptor());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.setGlobalPrefix('/api/v1');

  const config = new DocumentBuilder()
    .setTitle('Interviewer API Documentation')
    .setDescription('Interviewer Service API Description')
    .setVersion('1.0')
    .addTag('Register Service')
    .addBearerAuth({
      name: 'Authorization',
      bearerFormat: 'JWT',
      type: 'http',
      in: 'header',
      scheme: 'bearer',
    })
    .addSecurityRequirements('bearer')
    .build();

  // show swagger only development
  if (NODE_ENV === 'development') {
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('document', app, document);
  }

  await app.listen(PORT);
}
bootstrap();
