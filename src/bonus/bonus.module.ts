import { Module } from '@nestjs/common';
import { BonusService } from './bonus.service';
import { BonusController} from './bonus.controller';

@Module({
  imports: [],
  controllers: [BonusController],
  providers: [BonusService],
})
export class BonusModule {}
