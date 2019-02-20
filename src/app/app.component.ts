import { Component } from '@angular/core';
import {Heroes} from './heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour of heroes';
  public name = '';

  val: string = '';

  public hasError = false;
  public isSpec = true;
  public successClass = false;

  public activeClass = {
      'text-succsec': !this.hasError,
      'text-danger': !this.isSpec,
      'text-special': !this.successClass
  }

  heroes = [
      new Heroes(1, 'Windstorm'),
      new Heroes(13, 'Bombasto'),
      new Heroes(15, 'Magneta'),
      new Heroes(20, 'Tornado')
  ];

    myHero = this.heroes[0];

    color = 'silver';

    public text: string = '';

    logMessage(value){
        console.log(value);
    }

    onClick(event){
        this.text = event.type;
        console.log(event);
    }

    isSpecial: boolean = false;

    isUnchanged: boolean = true;

    heroImageUrl: string = 'https://picsum.photos/200';

    classes = 'sssssssssss';

    getClick(): void{
        this.classes = 'test';
    }


    public TestName: string = 'alexpust';
}
