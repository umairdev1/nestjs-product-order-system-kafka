import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { OrderServiceModule } from './order-service.module';

async function bootstrap() {
  const app = await NestFactory.create(OrderServiceModule);

  const kafka = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrderServiceModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'order-service-group',
        },
      },
    },
  );

  await kafka.listen();
  await app.listen(3001);
}
bootstrap();
