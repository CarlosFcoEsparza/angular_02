import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../servicios/heroes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  public heroes: any;

  constructor( private _heroesServicios: HeroesService,
               private router: Router ) { }

  ngOnInit() {
    this.heroes = this._heroesServicios.getArray();
  }

  verHeroe( index: number ) {
    this.router.navigate( ['heroe/', index] );
  }
}
