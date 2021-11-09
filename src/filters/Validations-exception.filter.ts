import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  BadRequestException,
} from '@nestjs/common';
import { Request, Response } from 'express';
@Catch(BadRequestException)
export class ValidationsExceptionFilter implements ExceptionFilter {
  mensageStatusCode(statusCode): string {
    if (statusCode) return 'Bad Request';
    return 'Not Bad Request';
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