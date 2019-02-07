import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    selectedHero: Hero;

    heroesLIst = HEROES;

    heroesSer: Hero[];


    onSelect(her: Hero): void{
        this.selectedHero = her;


    }


    constructor(private heroservise: HeroService) {
    }


    getHeroesList(): void{
        this.heroservise.getHeroes().subscribe(he => this.heroesSer =  he.slice(1, 5));
    }

    ngOnInit() {
        this.getHeroesList();
    }

}
