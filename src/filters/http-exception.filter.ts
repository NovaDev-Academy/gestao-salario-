import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  mensageStatusCode(statusCode): string {
    if (statusCode === 404) {
      return 'Recurso Nao Encontrado';
    } else if (statusCode === 500) {
      return 'Erro Vindo do Servidor | Internal server error';
    } else if (statusCode === 401) {
      return 'Erro Desconhecido';
    } else {
      return 'HTTP ERROR';
    }
  }

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      description: this.mensageStatusCode(status),
    });
  }
}