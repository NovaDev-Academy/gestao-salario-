import { Injectable } from '@nestjs/common';

const mensagemInicial = '<h2 align="center"> Backend with NestJs </h2>';
@Injectable()
export class AppService {
  getHello(): string {
    return mensagemInicial;
  }
}
