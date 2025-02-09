/* eslint-disable prettier/prettier */
import { Controller, Get, Post,Query} from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { Hero } from './hero.interface';

@Controller('superheroes')
export class HeroesController {
    constructor(private heroesService: HeroesService) { }

    @Get()
    async findAll(): Promise<Hero[]> {
        return this.heroesService.findAll().sort((hero1, hero2) => hero2.humility - hero1.humility)
    }

    @Post()
    async create(
        @Query('name') name: string,
        @Query('superpower') superpower: string,
        @Query('humility') humility: number,
    ) {
        const newHero = {} as Hero;
        newHero.name = name;
        newHero.superpower = superpower;
        newHero.humility = humility;
        this.heroesService.create(newHero);
        return newHero;
    }
}