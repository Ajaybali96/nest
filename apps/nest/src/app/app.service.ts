import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPlant(): { message: string } {
    return { message: 'Welcome to nest!' };
  }

  savePlant(): { message: string } {
    return { message: 'Welcome to nest!' };
  }
}
