import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpException,
  HttpStatus,
  UseFilters,
  UsePipes,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobDTO } from './data/job.dto';
import { Job } from './interfaces/job.interface';
// import { HttpExceptionFilter } from '../filters/http-exception.filter';
// import { ValidationsExceptionFilter } from 'src/filters/Validations-exception.filter';
import { ValidationPipe } from '../pipes/validator.pipes';
import { JobData } from '../decorators/jobdata.decorator';

@Controller('jobs')
// @UseFilters(HttpExceptionFilter)
@UsePipes(ValidationPipe)
export class JobsController {
  constructor(private readonly jobservice: JobsService) {}

  @Get()
  findAll(): Promise<Job[]> {
    return this.jobservice.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id): Promise<Job> {
    return this.jobservice
      .find(id)
      .then((result) => {
        if (result) return result;
        throw new HttpException('ERROR', HttpStatus.NOT_FOUND);
      })
      .catch(() => {
        throw new HttpException('ERROR', HttpStatus.NOT_FOUND);
      });
  }

  // @Post()
  // create(@Body() JOB: JobDTO): Promise<Job> {
  //   return this.jobservice.create(JOB);
  // }

  @Post()
  create(@JobData() JOB: JobDTO): Promise<Job> {
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
