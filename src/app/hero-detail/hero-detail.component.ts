import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Hero} from '../Hero';
import {HeroService} from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero:Hero;
  constructor(
    private route:ActivatedRoute,
    private heroService:HeroService,
    private location:Location
    ) { }

  ngOnInit() {
    console.log("xxxxxx")
    this.getHero();
    console.log(this.hero);
  }

  getHero():void{
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero=>this.hero=hero);
  }

  goBack():void{
    this.location.back();
  }

}