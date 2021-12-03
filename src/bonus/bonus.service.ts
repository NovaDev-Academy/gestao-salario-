import { Injectable } from '@nestjs/common';
import { Bonus } from './interface/bonus.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class BonusService {
  constructor(
    @InjectModel('bonus')
    private readonly bonusModel: Model<Bonus>,
  ) {}

  async findBonusAll(): Promise<Bonus[]>{
    return await this.bonusModel.find();
  }
}
