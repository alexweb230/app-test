import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {



  @Input()heroes: Hero;


  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) { }

  ngOnInit(): void{

    this.getHer();
  }

    getHer(): void {
      const  id = +this.route.snapshot.paramMap.get('id');
      this.heroService.getHero(id).subscribe(h => this.heroes = h);
    }


    goBack(): void {
        this.location.back();
    }


}
