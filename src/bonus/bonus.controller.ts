import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Header,
} from '@nestjs/common';
import { identity } from 'rxjs';

// @Controller({ host: 'admin.example.com' })
@Controller('bonus')
export class BonusController {
  @Get()
  @Header('Cache-Control', 'none')
  listAll(): string {
    return 'retornando os valores';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This actions return ${id} value`;
  }

  @Post()
  create(): string {
    return 'create new bonus';
  }

  @Put(':id')
  update(@Param('id') id: string): string {
    return `Bonus Update ${id}`;
  }

  @Delete(':id')
  Delete(@Param('id') id: string): string {
    return `Bonus ID: ${id} - Deleted Sucess`;
  }
  // @Put(':id')
  // AdendaBonus(@Param('id') id, @Body('') ): string{
  //   return 'ola'
  // }
}
