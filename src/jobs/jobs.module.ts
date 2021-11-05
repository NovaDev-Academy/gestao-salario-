import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { Jobschema } from './schemas/job.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'job', schema: Jobschema }])],
  controllers: [JobsController],
  providers: [JobsService],
})
export class JobsModule {}
