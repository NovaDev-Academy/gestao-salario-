import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SERVER } from './config/key.acess';
import { BonusController } from './bonus/bonus.controller';
import { BonusService } from './bonus/bonus.service';
import { BonusModule } from './bonus/bonus.module';

@Module({
  imports: [JobsModule, MongooseModule.forRoot(SERVER._mongoURI), BonusModule],
  controllers: [AppController, BonusController],
  providers: [AppService, BonusService],
})
export class AppModule {}
