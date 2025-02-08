/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';

describe('AppController', () => {
    let appController: AppController;
    let heroController: HeroesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController,HeroesController],
      providers: [AppService,HeroesService],
    }).compile();

      appController = app.get<AppController>(AppController);
      heroController = app.get<HeroesController>(HeroesService);
  });

describe('root', () => {
    it('should return "Hello World!"', () => {
        expect(appController.getHello()).toBe('Hello World!');
    });
});
//describe('get superheroes', () => {
//    it('should return 200', async () => {
//        await expect(heroController.findAll()).resolves.toContain([]);
//    });
//});
});
