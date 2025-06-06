import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

const prisma = new PrismaClient();

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const userCount = await prisma.user.count();
    return userCount === 0
      ? 'No users have been added yet.'
      : 'Some users have been added to the database.';
  }
}
