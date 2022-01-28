import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import console = require('console');
import { savePlant } from '../dto/plant.dto';

import { AppService } from './app.service';

@ApiTags('Plant Swagger')
@Controller("Plant")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getPlant')
  getPlant() {
    return this.appService.getPlant();
  }

  @Post('/savePlant')
  savePlant(@Body()  req:savePlant) {
    console.log('success');
  }
}
