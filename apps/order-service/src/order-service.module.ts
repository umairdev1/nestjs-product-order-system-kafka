import { Module } from '@nestjs/common';
import { OrderServiceController } from './order-service.controller';
import { OrderServiceService } from './order-service.service';
import { OrderModule } from './order/order.module';

@Module({
  imports: [OrderModule],
  controllers: [OrderServiceController],
  providers: [OrderServiceService],
})
export class OrderServiceModule {}
