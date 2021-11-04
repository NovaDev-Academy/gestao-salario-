import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsController } from './jobs/jobs.controller';
import { JobsService } from './jobs/jobs.service';

@Module({
  imports: [],
  controllers: [AppController, JobsController],
  providers: [AppService, JobsService],
})
export class AppModule {}
