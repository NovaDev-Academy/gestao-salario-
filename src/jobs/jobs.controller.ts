import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobDTO } from './data/job.dto';
import { Job } from './interfaces/job.interface';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobservice: JobsService) {}

  @Get()
  findAll(): string {
    return 'find all users jobs';
  }

  @Get(':id')
  findOneById(@Param('id') id): Promise<Job> {
    return this.jobservice.find(id);
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
