import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { EventsModule } from './gateway/websocket.module';

@Module({
  imports: [EventsModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
