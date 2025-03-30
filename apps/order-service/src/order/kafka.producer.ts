import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka } from 'kafkajs';

@Injectable()
export class KafkaProducerService implements OnModuleInit {
  private kafka = new Kafka({
    brokers: ['localhost:9092'],
  });

  private producer = this.kafka.producer();

  async onModuleInit() {
    await this.producer.connect();
  }

  async createOrder(orderId: string, amount: number) {
    await this.producer.send({
      topic: 'orders',
      messages: [{ value: JSON.stringify({ orderId, amount }) }],
    });
    console.log(`Order ${orderId} created and sent to Kafka.`);
  }
}
