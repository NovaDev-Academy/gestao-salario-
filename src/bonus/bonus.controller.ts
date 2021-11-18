import {
 Controller,
 Get,
 Post,
 Put,
 Delete,
 Body,
 Param,
 Header
} from '@nestjs/common';
import { get } from 'http';
@Controller('bonus')
export class BonusController {
  @Get()
  @Header('Cache-Control','none')
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


}
