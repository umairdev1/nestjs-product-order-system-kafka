import { Module } from '@nestjs/common';
import { PaymentServiceController } from './payment-service.controller';
import { PaymentServiceService } from './payment-service.service';
import { PaymentConsumerController } from './kafka.consumer';

@Module({
  imports: [],
  controllers: [PaymentServiceController, PaymentConsumerController],
  providers: [PaymentServiceService],
})
export class PaymentServiceModule {}
