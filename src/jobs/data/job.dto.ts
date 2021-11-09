import {IsString, IsInt, IsNumber} from 'class-validator';
export class JobDTO {
  
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly salary: number;
}