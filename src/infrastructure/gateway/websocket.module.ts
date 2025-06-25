import { Module } from '@nestjs/common';
import { RadioGateway } from './websocket.service';

@Module({
  providers: [RadioGateway],
})
export class EventsModule {}
