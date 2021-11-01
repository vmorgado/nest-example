import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as md5 from 'md5';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: 'md5_function',
      useFactory: () => {
        return md5;
      },
    }
  ],
})
export class AppModule {}
