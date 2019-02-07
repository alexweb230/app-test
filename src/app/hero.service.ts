import { Injectable } from '@angular/core';
import{Hero} from './hero';
import{HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs/index';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageservice: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageservice.add('HeroService: fetched heroes');
    return of (HEROES);
  }

    getHero(id: number): Observable<Hero> {
      this.messageservice.add(`HeroService: fetched hero id=${id}`);
        return of(HEROES.find(hero => hero.id === id));
    }


}
