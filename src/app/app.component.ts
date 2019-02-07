import { Component } from '@angular/core';
import {Heroes} from './heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour of heroes';


  heroes = [
      new Heroes(1, 'Windstorm'),
      new Heroes(13, 'Bombasto'),
      new Heroes(15, 'Magneta'),
      new Heroes(20, 'Tornado')
  ];

    myHero = this.heroes[0];
}
