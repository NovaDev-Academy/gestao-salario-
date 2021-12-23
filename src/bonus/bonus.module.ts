import { Module } from '@nestjs/common';
import { BonusService } from './bonus.service';
import { BonusController} from './bonus.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BonusSchema } from './schemas/bonus.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'bonus', schema: BonusSchema }]),
  ],
  controllers: [BonusController],
  providers: [BonusService],
})
export class BonusModule {}
