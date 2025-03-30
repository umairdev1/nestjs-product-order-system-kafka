import { Controller, Post, Body } from '@nestjs/common';
import { KafkaProducerService } from './kafka.producer';

@Controller('order')
export class OrderController {
  constructor(private readonly kafkaService: KafkaProducerService) {}

  @Post()
  async createOrder(@Body() body: { orderId: string; amount: number }) {
    await this.kafkaService.createOrder(body.orderId, body.amount);
    return { message: 'Order created successfully!' };
  }
}
