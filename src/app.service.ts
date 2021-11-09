import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getHello(): string {
    return '<h2 align="center"> Backend with NestJs </h2>';
  }
}
