import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobservice: JobsService) {}

  @Get()
  findAll(): string {
    return 'find all users jobs';
  }

  @Get(':id')
  findOneById(): string {
    return 'finded user id or data jobs';
  }

  @Post(':id')
  create(): string {
    return 'create new user';
  }

  @Put(':id')
  update(): string {
    return 'update user jobs';
  }

  @Delete()
  delete(): string {
    return 'delete user jobs';
  }
}
