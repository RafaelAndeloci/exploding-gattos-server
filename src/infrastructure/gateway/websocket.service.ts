import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

type PlayerEnteredRoomMessage = {
  playerId: number;
  playerName: string;
};

@WebSocketGateway({})
export class RadioGateway {
  @WebSocketServer()
  socket: Server;

  @SubscribeMessage('on_player_entered_room')
  handlePlayerEnteredRoomEvent(@MessageBody() data: PlayerEnteredRoomMessage) {
    this.socket.emit('on_player_entered_room', data);
  }
}
