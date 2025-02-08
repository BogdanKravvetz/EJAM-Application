/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Hero } from './hero.interface';

@Injectable()
export class HeroesService {
    private readonly heroes: Hero[] = [];


    create(hero: Hero) {
        this.heroes.push(hero);
    }

    findAll(): Hero[] {
        return this.heroes;
    }
}