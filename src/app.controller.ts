import { Controller, Get, Inject, Param, Query, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('md5_function')
    private readonly md5: CallableFunction) {}

  @Get()
  getHello(@Query('test') test: string): string {
    console.log(test);
    return this.md5(test);
  }
}
