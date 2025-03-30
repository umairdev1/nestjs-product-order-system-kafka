import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class PaymentConsumerController {
  private readonly logger = new Logger(PaymentConsumerController.name);

  @MessagePattern('orders') // Listens for messages on 'orders' topic
  async processPayment(@Payload() message: any) {
    try {
      const { orderId, amount } = message;

      this.logger.log(`Received Order: ${orderId}, Amount: $${amount}`);

      // Simulating payment processing delay (2 seconds)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      this.logger.log(`Payment for Order ${orderId} completed successfully.`);
    } catch (error) {
      this.logger.error(`Error processing payment: ${error}`);
    }
  }
}
