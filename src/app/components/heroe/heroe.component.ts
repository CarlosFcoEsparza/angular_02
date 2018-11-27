import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './../../servicios/heroes.services'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  private posicion: any;
  public heroe: any;

  constructor( private activateRoute: ActivatedRoute,
              private heroesService: HeroesService) {
    this.activateRoute.params.subscribe( params => {
      this.posicion = (params['id']);
      this.heroe = this.heroesService.getHeroe( this.posicion );
      console.log(params['id']);
    });

  }

  ngOnInit() {
  }
}
