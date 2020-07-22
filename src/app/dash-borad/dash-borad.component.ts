import { Component, OnInit } from '@angular/core';

import { Hero } from '../heroClass';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dash-borad',
  templateUrl: './dash-borad.component.html',
  styleUrls: ['./dash-borad.component.scss']
})
export class DashBoradComponent implements OnInit {
  topHeroesCap: number = 4;

  heroes: Hero[] = [];

  heroesToShow: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getDefualtHeroes()
      .subscribe(DefualtHeroes => this.heroes = DefualtHeroes);

    console.log(this.heroes);
    if(this.heroes.length < this.topHeroesCap){
      this.topHeroesCap = this.heroes.length;
    }

    for (let i = 0; i < this.topHeroesCap; i++) {
      this.heroesToShow.push(this.heroes[i])
    }
  }

}
