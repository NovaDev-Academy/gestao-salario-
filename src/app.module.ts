import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SERVER } from './config/key.acess';

@Module({
  imports: [JobsModule, MongooseModule.forRoot(SERVER._mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
