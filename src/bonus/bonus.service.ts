import { Injectable } from '@nestjs/common';
import { Bonus } from './interface/bonus.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class BonusService {
  constructor(
    @InjectModel('Bonus') private readonly bonusModel: Model<Bonus>,
  ) {}

  async findBonusAll(): Promise<Bonus[]> {
    return await this.bonusModel.find();
  }

  async find(id: string): Promise<Bonus> {
    return await this.bonusModel.findOne({ _id: id });
  }

  async create(bonus: Bonus): Promise<Bonus> {
    return await this.bonusModel.create(bonus);
  }

  async update(id: string, bonus: Bonus): Promise<Bonus> {
    return await this.bonusModel.findByIdAndUpdate(id, bonus, { new: true });
  }

  async delete(id: string): Promise<Bonus> {
    return this.bonusModel.findByIdAndRemove(id);
  }
}