import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HeroService } from '../hero.service'

import { Hero } from '../heroClass';
import { MassageService } from '../massage.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  Heroes: Array<Hero> = [];

  newHeroName: string = "";

  index: Number = 0;

  hero: Hero = {
    name: '',
    id: 0
  };

  selected: Hero;

  constructor(private heroService: HeroService, private messageService: MassageService) {}

  ngOnInit(): void {
    this.heroService.getDefualtHeroes()
      .subscribe(DefualtHeroes => this.Heroes = DefualtHeroes);

    console.log(this.Heroes);
  }

  selectEvent(selected: Hero): void{
    this.selected = selected;
    this.messageService.addMassage(`HeroesComponent: Selected hero id=${this.selected.id}`);
  }

  confirmSelected(selected: Hero): void{
    this.Heroes[selected.id].name = selected.name;
  }

  addHero(): void{
    const newHero: Hero = {
      name: this.newHeroName,
      id: this.Heroes.length
    };
    this.heroService.addHeroe(newHero);

    this.newHeroName = "";
  }
}
