import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PaymentServiceModule } from './payment-service.module';

async function bootstrap() {
  const kafka = await NestFactory.createMicroservice<MicroserviceOptions>(
    PaymentServiceModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'payment-service-group',
        },
      },
    },
  );

  await kafka.listen();
}
bootstrap();
