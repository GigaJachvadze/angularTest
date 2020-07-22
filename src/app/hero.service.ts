import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './heroClass';
import { MassageService } from './massage.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MassageService) {
  }

  mainHeores: Hero[];

  defualtHeroes: Hero[] = [
    {
      name: 'Garen',
      id: 0
    },
    {
      name: 'Darius',
      id: 0
    },
    {
      name: 'Rengar',
      id: 0
    },
    {
      name: 'Katarina',
      id: 0}
];

  private addDefualt(): Hero[]{
    if(this.mainHeores === undefined){
      this.mainHeores = [];

      for (let i = 0; i < this.defualtHeroes.length; i++) {
        this.defualtHeroes[i].id = i;
        this.mainHeores.push(this.defualtHeroes[i]);
      }

      return this.mainHeores;
    }
    else{
      return this.mainHeores
    }
  }

  getDefualtHeroes(): Observable<Hero[]>{
    return of (this.addDefualt());
  }

  addHeroe(hero: Hero): void{
    hero.id = this.mainHeores.length;
    this.mainHeores.push(hero);
  }
}
