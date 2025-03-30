import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { KafkaProducerService } from './kafka.producer';

@Module({
  controllers: [OrderController],
  providers: [OrderService, KafkaProducerService],
})
export class OrderModule {}
