import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from 'src/app.module';

async function bootstrap() {
  const port = process.env.USER_SERVICE_PORT
    ? Number(process.env.USER_SERVICE_PORT)
    : 3000;
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port,
    },
  });
  await app.listen();
  console.log('Microservice listening on port:', port);
}
bootstrap();
