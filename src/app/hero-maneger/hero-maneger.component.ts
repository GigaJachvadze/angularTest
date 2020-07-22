import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from "../heroClass"
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-maneger',
  templateUrl: './hero-maneger.component.html',
  styleUrls: ['./hero-maneger.component.scss']
})
export class HeroManegerComponent implements OnInit {
  selectedHero:Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService,private loc: Location, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
  this.heroService.getDefualtHeroes()
    .subscribe(h => this.heroes = h);

  const id = +this.router.snapshot.paramMap.get("id");
  this.selectedHero = this.heroes[id];
  }

  Back(): void{
    this.loc.back();
  }
}
