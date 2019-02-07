import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {



    heroesSer: Hero[];





    constructor(private heroservise: HeroService) {
    }


    getHeroesList(): void{
        this.heroservise.getHeroes().subscribe(he => this.heroesSer =  he);
    }

    ngOnInit() {
        this.getHeroesList();
    }

}
