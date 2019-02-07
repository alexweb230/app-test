import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour of heroes';


  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

    myHero = this.heroes[0];
}
