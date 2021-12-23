import { IsNumber, IsString } from 'class-validator';
export class BonusDTO{
  @IsString()
  readonly valorSalary: number;
  @IsNumber()
  readonly descricao: string;
  @IsNumber()
  readonly percentagem: number;
  @IsNumber()
  readonly codigoAnual: number;
}