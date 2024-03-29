/* The entry file of the application which uses the core funcion NestFactory 
 * to create a Nest application instance */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  await app.listen(3000);
}
bootstrap();
