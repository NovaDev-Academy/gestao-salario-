import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ValidationsExceptionFilter } from './filters/Validations-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new ValidationsExceptionFilter());
  await app.listen(3000);
}
bootstrap();
