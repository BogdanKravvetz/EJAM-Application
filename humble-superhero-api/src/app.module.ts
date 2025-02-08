/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';

@Module({
  imports: [],
    controllers: [AppController, HeroesController],
    providers: [AppService, HeroesService],
})
export class AppModule {}
