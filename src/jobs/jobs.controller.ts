import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Delete,
  Param,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobDTO } from './data/job.dto';
import { Job } from './interfaces/job.interface';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobservice: JobsService) {}

  findAll(): string {
    return 'find all users jobs';
  }

  @Get(':id')
  findOneById(@Param('id') id): Promise<Job> {
    return this.jobservice.find(id);
  }

  @Post()
  create(@Body() JOB: JobDTO): Promise<Job> {
    return this.jobservice.create(JOB);
  }

  @Put(':id')
  update(@Param('id') id, @Body() Job: JobDTO): Promise<Job> {
    return this.jobservice.update(id, Job);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Job> {
    return this.jobservice.delete(id);
  }
}
